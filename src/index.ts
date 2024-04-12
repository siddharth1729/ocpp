// index.ts
import { WebSocketServer } from './infrastructure/WebSocketServer/webSocketServer';
import { SERVER_PORT } from './config';
import { Logger, LogLevel } from './utils/logger';

// Create a WebSocket server instance
const server = new WebSocketServer(SERVER_PORT);

// Start the WebSocket server
server.start();

// Log server startup message
Logger.log(LogLevel.INFO, 'This is a custom log message');
