const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../../index");
const { UserModel } = require("../../db");

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

describe("🧪 Auth API Tests", () => {
  it("should successfully sign up a new user", async () => {
    const res = await request(app)
      .post("/signup")
      .send({
        email: "test@example.com",
        password: "test123",
        name: "Test User",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("You are signed in");
  }, 20000);

  it("should successfully sign in with correct credentials", async () => {
    const res = await request(app)
      .post("/signin")
      .send({
        email: "test@example.com",
        password: "test123",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Signed in successfully");
    expect(res.body.token).toBeDefined();
  }, 20000);

  it("should fail sign in with incorrect password", async () => {
    const res = await request(app)
      .post("/signin")
      .send({
        email: "test@example.com",
        password: "wrongpass",
      });

    expect(res.statusCode).toBe(403);
    expect(res.body.message).toBe("Incorrect credentials");
  }, 20000);
});
