# 💰 Money Manager

A full-stack personal finance and money management application that helps users track income, expenses, budgets, savings goals, and financial reports through a modern dashboard interface.

🌐 **Live Demo:**  
https://money-manager-gamma-eight.vercel.app/

📂 **GitHub Repository:**  
https://github.com/Vishal200406/money-manager.git

---

# 📌 Project Overview

Money Manager is a full-stack financial management application designed to help users understand and control their personal finances.

Users can:

- Create an account and securely log in
- Track income and expenses
- Create monthly budgets
- Monitor spending habits
- Set savings goals
- View financial analytics
- Generate reports
- Manage personal financial information securely

The application uses a modern frontend architecture with a REST API backend and MongoDB database.

---

# 🚀 Features

## 🔐 Authentication

- User registration
- Secure login/logout
- JWT-based authentication
- Protected routes
- Cookie-based session handling
- Automatic redirect handling

---

## 💳 Transaction Management

Users can:

- Add income transactions
- Add expense transactions
- Categorize transactions
- Track financial history
- View spending patterns

---

## 📊 Dashboard Analytics

The dashboard provides:

- Total balance
- Income summary
- Expense summary
- Savings overview
- Expense category visualization
- Income vs expense charts

---

## 💰 Budget Management

Users can:

- Create monthly budgets
- Assign budgets to categories
- Track spending limits
- Monitor remaining budget amounts

---

## 🎯 Savings Goals

Users can:

- Create savings goals
- Define target amounts
- Monitor progress toward goals

---

## 📈 Reports

The application provides financial insights through:

- Spending analysis
- Category breakdowns
- Financial summaries

---

# 🛠️ Technology Stack

## Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Axios
- Lucide React Icons
- Recharts

---

## Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT Authentication
- Cookie Parser
- Express Middleware

---

## Database

- MongoDB Atlas

---

## Deployment

Frontend:

- Vercel

Backend:

- Render / Cloud Hosting

Database:

- MongoDB Atlas

---

# 📂 Project Structure

```
money-manager
│
├── client
│   ├── src
│   │   ├── app
│   │   ├── components
│   │   ├── context
│   │   ├── lib
│   │   └── config
│   │
│   └── package.json
│
├── server
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── models
│   │   ├── middleware
│   │   ├── services
│   │   └── config
│   │
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation and Setup

## 1. Clone Repository

```bash
git clone https://github.com/Vishal200406/money-manager.git
```

Navigate into the project:

```bash
cd money-manager
```

---

# Frontend Setup

Navigate to client:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create:

```
.env.local
```

Add:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Run development server:

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

---

# Backend Setup

Open another terminal.

Navigate to server:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create:

```
.env
```

Add:

```env
PORT=5000

NODE_ENV=development

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:3000
```

Start backend:

```bash
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

# 🔑 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/register | Create account |
| POST | /api/auth/login | Login user |
| POST | /api/auth/logout | Logout user |

---

## Users

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/users/profile | Get user profile |

---

## Transactions

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/transactions | Get transactions |
| POST | /api/transactions | Create transaction |

---

## Budgets

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/budgets | Get budgets |
| POST | /api/budgets | Create budget |

---

## Analytics

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/analytics/dashboard | Dashboard analytics |

---

# 🔒 Security Features

The application includes:

- JWT authentication
- HTTP-only cookies
- Password hashing
- Protected API routes
- Rate limiting
- Helmet security middleware
- CORS configuration

---

# 📱 User Flow

```
Visitor
   |
   ↓
Landing Homepage
   |
   ├── Register
   |
   └── Login
          |
          ↓
       Dashboard
          |
          ├── Transactions
          ├── Budgets
          ├── Reports
          ├── Savings Goals
          |
          ↓
        Logout
```

---

# 🌍 Deployment

The application is deployed using:

## Frontend

Vercel:

https://money-manager-gamma-eight.vercel.app/

## Backend

Express API deployed separately with environment variables configured.

## Database

MongoDB Atlas.

---

# 👨‍💻 Author

**Vishal**

GitHub:

https://github.com/Vishal200406

---

# 📄 License

This project is developed for educational and portfolio purposes.
