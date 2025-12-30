# MediSlot Frontend – Doctor Appointment Booking System

This is the **frontend application** for the MediSlot Doctor Appointment platform.  
It allows users to register, log in, book appointments, and view available medical services.

---

## 🚀 Tech Stack

- React (Vite)
- Redux Toolkit
- React Router DOM
- Axios
- Tailwind CSS
- JavaScript (ES6)

---

## 📁 Project Structure

medislot-frontend/
│
├── public/
│ └── index.html
│
├── src/
│ ├── api/
│ │ └── api.js
│
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── ProtectedRoute.jsx
│ │ └── Loader.jsx
│
│ ├── pages/
│ │ ├── Login.jsx
│ │ ├── Signup.jsx
│ │ ├── Dashboard.jsx
│ │ ├── BookAppointment.jsx
│ │ ├── MyAppointments.jsx
│ │ ├── Services.jsx
│ │ └── Profile.jsx
│
│ ├── redux/
│ │ ├── store.js
│ │ ├── authSlice.js
│ │ └── appointmentSlice.js
│
│ ├── routes/
│ │ └── AppRoutes.jsx
│
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── .env
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md

yaml
Copy code

---

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:5000/api
For production:

env
Copy code
VITE_API_BASE_URL=https://your-backend-url.onrender.com/api
⚙️ Installation & Setup
Install dependencies
bash
Copy code
npm install
Run development server
bash
Copy code
npm run dev
Application will run at:

arduino
Copy code
http://localhost:5173
🎨 Tailwind Setup
src/index.css
css
Copy code
@tailwind base;
@tailwind components;
@tailwind utilities;
tailwind.config.js
js
Copy code
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
🔗 API Configuration
src/api/api.js
js
Copy code
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
🔐 Authentication Features
User signup

User login

JWT-based authentication

Protected routes

Auto redirect after login

Logout support

📅 Appointment Features
Book appointment (date, time, doctor type)

Upload medical report

View all appointments

Filter appointments by year

Secure API access

🏥 Medical Services
Fetch services from backend

Display as cards

Dynamic rendering from database

🧭 Routing
Routes are managed using React Router:

bash
Copy code
/login
/signup
/dashboard
/book
/appointments
/services
/profile
Protected routes require authentication.

🧠 State Management
Redux Toolkit is used for:

Authentication state

Appointment state

API request handling

🚀 Deployment (Frontend)
Deploy on Vercel / Netlify
Push repository to GitHub

Import project in Vercel

Add environment variable:

ini
Copy code
VITE_API_BASE_URL=https://your-backend.onrender.com/api
Deploy

✅ Features Summary
Authentication with JWT

Protected routes

Appointment booking

Service listing

Redux state management

Tailwind CSS UI

API integration

Responsive layout

Production-ready setup
