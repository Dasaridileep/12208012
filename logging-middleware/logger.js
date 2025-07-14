const LOGGING_API_URL = "http://20.244.56.144/evaluation-service/logs";

async function Log(stack, level, pkg, message) {
  const validStacks = ["frontend", "backend"];
  const validLevels = ["debug", "info", "warn", "error", "fatal"];
  const validPackages = [
    "cache", "controller", "cronjob", "auth", "config",
    "middleware", "utils", "component", "hook", "page", "state", "style"
  ];

  if (
    !validStacks.includes(stack) ||
    !validLevels.includes(level) ||
    !validPackages.includes(pkg)
  ) {
    return;
  }

  const body = {
    stack,
    level,
    package: pkg,
    message
  };

  try {
    const res = await fetch(LOGGING_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  } catch (error) {
  }
}
module.exports = { Log };
