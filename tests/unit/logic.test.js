const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const dummyUserId = "1234567890abcdef";


describe("🧪 Unit Test: Password Hashing", () => {
  it("should hash the password and match correctly", async () => {
    const plainPassword = "mypassword";
    const hashed = await bcrypt.hash(plainPassword, 5);
    const match = await bcrypt.compare(plainPassword, hashed);
    expect(match).toBe(true);
  });
});


describe("🧪 Unit Test: JWT Token", () => {
  it("should generate a valid JWT token and decode it", () => {
    const secret = "testsecret";
    const token = jwt.sign({ id: dummyUserId }, secret);
    const decoded = jwt.verify(token, secret);
    expect(decoded.id).toBe(dummyUserId);
  });
});
