# User Registration System

This is a full-stack user registration system built with **React** (frontend) and **Node.js with Express** (backend). Users can register by providing their name, age, and email. The data is stored in memory (or in a simple backend) and users can be listed or deleted.

## 🖼️ Features

- User registration with name, age, and email
- List of registered users
- Delete users
- Responsive and modern UI built with React and CSS

---

## ⚙️ Tech Stack

### Frontend:
- React
- Vite
- Axios

### Backend:
- Node.js
- Express
- CORS middleware

---

## 🚀 Getting Started

### Install dependencies

#### Backend

```bash
cd API
npm install
```

#### Frontend

```bash
cd ../cadastro-usuarios
npm install
```

---

## ▶️ Running the project

### Start the backend

```bash
cd API
node --watch server.js
```

This will start the backend server at `http://localhost:3000`.

### Start the frontend

Open another terminal:

```bash
cd cadastro-usuarios
npm run dev
```

This will start the Vite development server at `http://localhost:5173`.

---

## 📌 Notes

- All user data is stored in-memory. Restarting the backend will reset the list.
- CORS is enabled in the backend to allow frontend requests.

---
