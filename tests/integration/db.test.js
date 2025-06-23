const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const { TodoModel, UserModel } = require("../../db");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();


  await mongoose.connect(uri);
}, 30000);

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
}, 30000);

describe("🧪 Integration: TodoModel + DB", () => {
  it("should create and retrieve a todo from DB", async () => {
    const user = await UserModel.create({
      email: "int@test.com",
      password: "hashedpass",
      name: "Integration User"
    });

    const todo = await TodoModel.create({
      title: "Integration Test Todo",
      userId: user._id,
      done: false
    });

    const fetched = await TodoModel.findOne({ _id: todo._id });

    expect(fetched).toBeDefined();
    expect(fetched.title).toBe("Integration Test Todo");
    expect(fetched.userId.toString()).toBe(user._id.toString());
  }, 20000); 
});
