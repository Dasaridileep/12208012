const { Log } = require("./logger");

async function testLog() {
  await Log("frontend", "info", "component", "This is a test log from example.js");
  console.log("Log sent.");
}

testLog();
