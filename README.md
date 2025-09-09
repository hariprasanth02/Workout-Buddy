# Workout Buddy

A full-stack MERN application for tracking workouts.  
This project includes a React frontend and an Express/MongoDB backend with JWT authentication.

## Project Structure

```
Backend/
  controllers/
  middleware/
  models/
  routes/
  .env
  package.json
  server.js

frontend/
  public/
  src/
    components/
    context/
    hooks/
    pages/
  package.json
  vite.config.js
```

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB (local or Atlas)

---

### Backend Setup

1. Navigate to the `Backend` folder:
   ```sh
   cd Backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file with:
   ```
   MONGO_URI=your_mongodb_connection_string
   SECRET=your_jwt_secret
   PORT=4000
   ```
4. Start the backend server:
   ```sh
   npm start
   ```
   The backend runs on `http://localhost:4000`.

---

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend dev server:
   ```sh
   npm run dev
   ```
   The frontend runs on `http://localhost:5173` (default Vite port).

---

## Features

- User authentication (signup/login with JWT)
- Create, read, update, delete workouts
- Workouts are user-specific
- Responsive UI

## Tech Stack

- **Frontend:** React, Vite, React Router
- **Backend:** Express, MongoDB, Mongoose, JWT, bcrypt

## License

MIT
