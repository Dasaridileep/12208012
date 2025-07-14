// logger.js

import axios from 'axios';
import { isValidStack, isValidLevel, isValidPackage } from './constants.js';

// ✅ Replace this token with your actual token if provided
const AUTH_TOKEN = 'Bearer YOUR_REAL_TOKEN';

const LOG_API_URL = 'http://20.244.56.144/evaluation-service/logs';

export async function Log(stack, level, pkg, message) {
  if (!isValidStack(stack)) {
    console.error(`[LOG ❌] Invalid stack: ${stack}`);
    return;
  }

  if (!isValidLevel(level)) {
    console.error(`[LOG ❌] Invalid level: ${level}`);
    return;
  }

  if (!isValidPackage(stack, pkg)) {
    console.error(`[LOG ❌] Invalid package '${pkg}' for stack '${stack}'`);
    return;
  }

  const payload = {
    stack,
    level,
    package: pkg,
    message,
  };

  try {
    const response = await axios.post(LOG_API_URL, payload, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTH_TOKEN,
      },
    });

    if (response.status === 200) {
      console.log(`✅ Log created: ${response.data.logID}`);
    } else {
      console.error('❌ Failed to log:', response.data);
    }
  } catch (error) {
    if (error.response) {
      console.error('❌ Failed to log:', error.response.data);
    } else {
      console.error('❌ Network or server error:', error.message);
    }
  }
}
