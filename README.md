# 📝 TODO-APP — Full Stack Project (Keploy Task 4)

A full-stack TODO Application with user authentication, built using **Node.js**, **Express**, **MongoDB**, and a simple **HTML/CSS/JS frontend**. Users can sign up, sign in, create, read, update, and delete their todos — all backed by a secure JWT-authenticated API.

> ✅ Built as part of **Keploy Fellowship - Task 2**  
> 🚀 Personal Project

---

## ⚙️ Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose  
- **Frontend**: HTML, CSS, JavaScript  
- **Authentication**: JWT (JSON Web Token)  
- **Testing**: Jest, Supertest, mongodb-memory-server  ,Swagger for API Docs, Keploy for API Test Recording

---
## ✅ Keploy Integration (Day 4 - Fellowship)

### Option 1: Using Chrome Extension (Quickest)
1. Load the [Keploy Chrome Extension](https://github.com/keploy/extension)
2. Start your app: `node index.js`
3. Open the extension → Click **"Record API Calls"**
4. Make API requests (e.g., using Swagger or Postman)
5. Stop Recording → Click **"Generate Tests"**

## 🚀 Getting Started (Run Locally)

### 1. Clone the Repository

Clone the repository and move into the project directory:

git clone https://github.com/sanskar0627/TODO-APP.git
cd TODO-APP

### 2. Install Dependencies

npm install


### 3. Set Up Environment

Copy `.env.example` to `.env` and fill in your MongoDB connection string and a JWT secret key.

### 4. Start the Server

node index.js


Server will run at: `http://localhost:3000`

### 5. Run the Frontend

Simply open `frontend.html` in your browser.

---

## 📬 API Endpoints

### 🔐 Auth

| Method | Endpoint   | Description             |
|--------|------------|-------------------------|
| POST   | /signup    | Register a new user     |
| POST   | /signin    | Login & get JWT token   |

**Pass token in headers like this:**

token: your_jwt_token_here


### 📌 Todos (Protected)

| Method | Endpoint     | Description          |
|--------|--------------|----------------------|
| POST   | /todo        | Create a new todo    |
| GET    | /todos       | Get all todos        |
| PUT    | /todo/:id    | Update a todo        |
| DELETE | /todo/:id    | Delete a todo        |

---

## 🧪 Testing

Run the tests using:

npm test


✅ Unit Tests (70%+ coverage)  
✅ Integration Tests (mongodb-memory-server)  
✅ API Tests (Supertest)

---

## 📸 Screenshots

<img width="1644" height="947" alt="image" src="https://github.com/user-attachments/assets/0018542c-1271-4d67-b630-ee01927cc5bc" />
<img width="1654" height="940" alt="image" src="https://github.com/user-attachments/assets/9497a4b4-f558-4fc9-8a80-d9bf70d8f2f4" />
<img width="1652" height="940" alt="image" src="https://github.com/user-attachments/assets/e5ffe6bf-3f0b-4393-8202-582a7c392ecd" />



---

## 🙋 Author

Made with ❤️ by **Sanskar**  
