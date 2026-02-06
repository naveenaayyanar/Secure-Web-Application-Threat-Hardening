# 🔐 Secure Web Application & Threat Hardening

**Module:** Ethical Hacking & Defense
**Project 01 – Security Fundamentals**

This project demonstrates how real-world web applications are secured using modern authentication, authorization, session management, and threat-mitigation techniques.

The system implements a secure login-based web application where only authenticated users can access protected resources.

---

## 🎯 Project Objectives

The goal is to prove that cybersecurity is not only about finding vulnerabilities but also about designing applications that are secure by default.

This project covers:

* Authentication & Authorization Flow
* Hashing & Password Policies
* Input Validation & Sanitization
* Session Handling & Access Control

---

## 🧱 System Architecture

```
Client (Postman / Browser)
        |
        |  HTTP
        ↓
Node.js (Express) Secure API
        |
        ↓
In-Memory User Store (for demo)
```

---

## 🔐 Security Features Implemented

| Feature             | Description                 |
| ------------------- | --------------------------- |
| Password Hashing    | bcrypt with 12 salt rounds  |
| Authentication      | JWT-based login             |
| Session Handling    | HttpOnly cookies            |
| Access Control      | Middleware protected routes |
| Authorization       | Role-based (admin ready)    |
| Brute Force Defense | Login attempt tracking      |
| Input Handling      | JSON-only API               |

---

## 🔁 Authentication Flow

```
User → Register → Password hashed (bcrypt)
User → Login → JWT issued → Stored in HttpOnly Cookie
User → Dashboard → JWT validated → Access granted
Unauthorized → Blocked (401)
```

---

## 🧪 API Endpoints

| Method | Endpoint   | Description                  |
| ------ | ---------- | ---------------------------- |
| POST   | /register  | Create new user              |
| POST   | /login     | Authenticate user            |
| GET    | /dashboard | Protected user page          |
| GET    | /admin     | Admin-only page (if enabled) |

---

## 🖥️ How to Run

1. Open terminal in backend folder:

```
cd secure-app/backend
```

2. Install dependencies:

```
npm install
```

3. Start server:

```
node server.js
```

You should see:

```
Running on 3000
```

---

## 🧪 Testing (Postman)

### Register

```
POST http://localhost:3000/register
```

```json
{
  "email": "test@test.com",
  "password": "StrongPass123!"
}
```

---

### Login

```
POST http://localhost:3000/login
```

```json
{
  "email": "test@test.com",
  "password": "StrongPass123!"
}
```

---

### Access Protected Page

```
GET http://localhost:3000/dashboard
```

---

### Unauthorized Access Test

Open a new Postman tab (no login):

```
GET http://localhost:3000/dashboard
→ Unauthorized
```

---

## 🖼️ Screenshots

### Server Running

![Server](screenshots/server.png)

### User Registration

![Register](screenshots/register.png)

### Login

![Login](screenshots/login.png)

### Protected Dashboard

![Dashboard](screenshots/dashboard.png)

### Unauthorized Access Blocked

![Unauthorized](screenshots/unauthorized.png)

---

## 🛡️ Threat Mitigation

| Threat               | Defense              |
| -------------------- | -------------------- |
| Password theft       | bcrypt hashing       |
| Brute force          | login attempt limits |
| Session hijacking    | HttpOnly cookies     |
| Unauthorized access  | JWT verification     |
| Privilege escalation | Role checks          |

---

By
Naveena

If you want, I can also generate the **Security Design Explanation** PDF for final submission 📄
