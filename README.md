# 📦 Subscription Tracker API

A secure, scalable, and modern API for managing subscriptions with built-in user authentication, Arcjet protection, and role-based authorization.

---

## 🚀 Features

- 🔐 Full **User Authentication** (register, login, protected routes)
- 🧾 **Subscription Management** (create, update, cancel, renewals)
- 🧠 **Reminder Workflow** (send reminders before renewal dates)
- 🛡️ **Arcjet Integration** for DDoS/bot protection
- 🧪 **Role-based Authorization** middleware
- 🌐 RESTful API design
- 🗃️ MongoDB integration with Mongoose
- ⚙️ Configurable environment with `.env` support

---

## 📁 Folder Structure

```
subscription-tracker-api/
├── config/              # Environment & Arcjet configs
├── controllers/         # API controller functions
├── database/            # MongoDB connection logic
├── middleware/          # Error, auth, and Arcjet middleware
├── models/              # Mongoose schemas
├── routes/              # API routes
├── app.js               # Express app setup
└── .env                 # Environment variables
```

---

## ⚙️ Installation

```bash
# Clone the repository
https://github.com/dagimgetaw/subscription-tracker-api.git

# Enter to repo
cd subscription-tracker-api

# Install dependencies
npm install

# Set up your .env file
cp .env.example .env
# Fill in the required values

# Start the development server
npm run dev
```

---

## 🔐 Authentication & Authorization

- JWT-based auth
- Protect routes with the `authorize` middleware
- Secure cookies for session management

---

## 🛡️ Arcjet Middleware

Uses Arcjet to defend against:
- ❌ DDoS attacks  
- 🤖 Bot traffic  
- 📈 Rate limiting  

Middleware is applied globally before route handling.

---

## 📬 Reminder Workflow

Automatically triggers reminders:
- 7, 5, 2, and 1 day(s) before subscription renewal
- Uses Upstash Workflows + Day.js

---

## 🧰 Tech Stack

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **JWT Authentication**
- **Arcjet** (middleware)
- **Upstash Workflow** (reminder logic)
- **Day.js** (time handling)

---

## 👨‍💻 Author

Built by [Dagim](https://github.com/dagimgetaw)

---

## 📝 License

This project is licensed under the MIT License.
