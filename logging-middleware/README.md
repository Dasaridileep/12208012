# Logging Middleware

This is a reusable logging middleware package designed for both frontend and backend JavaScript applications.

## What It Does

The middleware provides a single `Log` function that sends structured log messages to a remote logging server. These logs help track the application's behavior, errors, warnings, and important events, making debugging and monitoring easier.

## Features

- Supports multiple log levels: `debug`, `info`, `warn`, `error`, and `fatal`.
- Validates input parameters to ensure logs follow the required format.
- Sends logs to the official evaluation service endpoint.
- Designed to be lightweight and easy to integrate.
- Compatible with both frontend (React) and backend (Node.js) environments.

## How to Use

Import the `Log` function and call it with the required parameters:

```js
import { Log } from "./middleware/logger";

await Log("frontend", "info", "component", "User created a shortened URL.");
Parameters
stack — Either "frontend" or "backend".

level — Log severity level ("debug", "info", "warn", "error", "fatal").

package — The package/module name (e.g., "auth", "middleware", "component").

message — A descriptive log message string.