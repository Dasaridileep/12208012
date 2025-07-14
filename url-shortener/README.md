# 🔗 URL Shortener React App

This is a client-side URL Shortener web application built using React and Material UI. It was developed as part of the Campus Hiring Evaluation conducted by Afford Medical Technologies.

The app allows users to shorten long URLs, optionally provide a custom shortcode and validity period, and view analytical insights about each shortened link — all while ensuring a clean, user-friendly design and strict adherence to the evaluation guidelines.

---

## 🧩 Features

- Shorten up to **5 URLs at once**
- Optional **custom shortcode** (must be unique and alphanumeric)
- Optional **validity period** (in minutes); defaults to **30 minutes** if not provided
- **Client-side routing** for redirecting short URLs to the original ones
- **Click analytics** including:
  - Total click count
  - Timestamp of each click
  - Referrer (source)
  - Simulated location (India)
- View all shortened URLs in a separate **Statistics page**
- **Custom logging middleware** used throughout (no `console.log`)
- Clean UI built with **Material UI**

---

## 🛠️ Tech Stack

- **React.js** (Frontend Framework)
- **Material UI (MUI)** (Styling and Components)
- **React Router DOM** (Routing)
- **localStorage** (Persistent Client-Side Storage)
- **JavaScript UUID** (Auto shortcode generation)

---

## 📁 Project Structure

src/
├── components/
├── middleware/
│ └── logger.js # Custom logging middleware
├── pages/
│ ├── Home.js # URL shortening page
│ └── Statistics.js # Analytics and stats page
├── utils/
│ └── validators.js # URL, shortcode, and validity validators
├── App.js # Main app with routing
├── App.css # Basic styling
└── index.js # Entry point

---

## 🧪 How to Run Locally

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
npm install
npm start

App will be available at:
📍 http://localhost:3000

