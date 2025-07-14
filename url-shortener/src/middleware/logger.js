const log = (action, payload = {}) => {
  const entry = {
    timestamp: new Date().toISOString(),
    action,
    payload
  };

  const logs = JSON.parse(localStorage.getItem("logs") || "[]");
  logs.push(entry);
  localStorage.setItem("logs", JSON.stringify(logs));
};

export default log;
