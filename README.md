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

```
src/
├── components/           # (Optional reusable components if needed)
├── middleware/
│   └── logger.js         # Custom logging middleware
├── pages/
│   ├── Home.js           # URL shortening page
│   └── Statistics.js     # Analytics and stats page
├── utils/
│   └── validators.js     # URL, shortcode, and validity validators
├── App.js                # Main app with routing
├── App.css               # Basic styling
└── index.js              # Entry point
```

---

## 🧪 How to Run Locally

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

2. **Install the Dependencies**

```bash
npm install
```

3. **Start the Development Server**

```bash
npm start
```

App will be available at:  
📍 `http://localhost:3000`

---

## 🔍 How It Works

1. On the homepage, users can enter up to 5 long URLs, a validity period in minutes (optional), and a custom shortcode (optional).
2. Short links are generated and stored in `localStorage`, with expiry time handled locally.
3. Clicking a short link (e.g., `http://localhost:3000/abc123`) redirects to the original URL, and logs the click.
4. The **"📊 View Analytics"** button lets users see detailed stats:
   - Creation and expiry time
   - Total clicks
   - Timestamp, source, and location of each click



## 💡 Notes

- This app does not require user login/authentication.
- All data is stored locally on the user's browser (as per instructions).
- Clicking shortened URLs from different tabs or incognito windows will log different referrer values (like "Direct", or "localhost:3000").
- Location data is mocked as “India” for all users.

---

## 👨‍💻 Author Details

**Developer Name**: Your Name  
**Roll Number**: YOUR-ROLL-NUMBER  
**Email**: your.email@example.com  
**Submitted For**: Campus Hiring Evaluation – Frontend Track  
**Company**: Afford Medical Technologies Pvt. Ltd.

---

## 📌 Submission Note

The application is organized and submitted strictly according to the guidelines provided in the *Campus Hiring Evaluation – Pre-Test Setup* document.

If any additional deployment or documentation is required, I am happy to provide it.
