import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";

function Redirector() {
  const { code } = useParams();
  const data = JSON.parse(localStorage.getItem(code));

  if (!data) return <h2>404: Short URL not found</h2>;

  const now = new Date();
  const expiry = new Date(data.expiry);

  if (now > expiry) return <h2>Link expired</h2>;

  data.clicks.push({
    time: now.toISOString(),
    source: document.referrer || "Direct",
    geo: "India"
  });

  localStorage.setItem(code, JSON.stringify(data));

  window.location.href = data.url;
  return null;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Statistics />} />
        <Route path="/:code" element={<Redirector />} />
      </Routes>
    </Router>
  );
}

export default App;
