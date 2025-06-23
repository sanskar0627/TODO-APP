# 📝 TODO-APP — Full Stack Project (Keploy Task 2)

A full-stack TODO Application with user authentication, built using **Node.js**, **Express**, **MongoDB**, and a simple **HTML/CSS/JS frontend**. Users can sign up, sign in, create, read, update, and delete their todos — all backed by a secure JWT-authenticated API.

> ✅ Built as part of **Keploy Fellowship - Task 2**  
> 🚀 Personal Project

---

## ⚙️ Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose  
- **Frontend**: HTML, CSS, JavaScript  
- **Authentication**: JWT (JSON Web Token)  
- **Testing**: Jest, Supertest, mongodb-memory-server  

---

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

![image](https://github.com/user-attachments/assets/6bbdb6de-21b1-4af8-bc5a-b6a7cf282daa)


---

## 🙋 Author

Made with ❤️ by **Sanskar**  
