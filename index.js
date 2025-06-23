const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const cors = require("cors");

const { UserModel, TodoModel } = require("./db");
require("dotenv").config();



const app = express();
app.use(express.json());
app.use(cors());

const JWT_SECRET = process.env.JWT_SECRET;

if (process.env.NODE_ENV !== "test") {
  mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
}

app.post("/signup", async (req, res) => {
    const { email, password, name } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 5);
        await UserModel.create({ email, password: hashedPassword, name });
        res.status(201).json({ message: "You are signed in" });
    } catch (e) {
        res.status(400).json({ message: "User already exists" });
    }
});


app.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.status(403).json({ message: "User does not exist in our DB" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
        const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET);
        res.status(200).json({ message: "Signed in successfully", token });
    } else {
        res.status(403).json({ message: "Incorrect credentials" });
    }
});


function auth(req, res, next) {
    try {
        const token = req.headers.token;
        const decodedData = jwt.verify(token, JWT_SECRET);
        req.userId = decodedData.id;
        next();
    } catch (e) {
        res.status(403).json({ message: "Invalid or missing token" });
    }
}


app.post("/todo", auth, async (req, res) => {
    const { title } = req.body;
    const userId = req.userId;

    const todo = await TodoModel.create({ title, userId, done: false });
    res.status(201).json({ message: "Todo created", todo });
});


app.get("/todos", auth, async (req, res) => {
    const todos = await TodoModel.find({ userId: req.userId });
    res.status(200).json({ todos });
});


app.put("/todo/:id", auth, async (req, res) => {
    const { id } = req.params;
    const { title, done } = req.body;

    const updated = await TodoModel.findOneAndUpdate(
        { _id: id, userId: req.userId },
        { title, done },
        { new: true }
    );

    if (updated) {
        res.status(200).json({ message: "Todo updated", todo: updated });
    } else {
        res.status(404).json({ message: "Todo not found or unauthorized" });
    }
});


app.delete("/todo/:id", auth, async (req, res) => {
    const { id } = req.params;

    const deleted = await TodoModel.findOneAndDelete({ _id: id, userId: req.userId });

    if (deleted) {
        res.status(200).json({ message: "Todo deleted" });
    } else {
        res.status(404).json({ message: "Todo not found or unauthorized" });
    }
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
  });
}

module.exports = app; 

