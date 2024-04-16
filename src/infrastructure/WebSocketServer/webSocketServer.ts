// WebSocketServer.ts
import * as WebSocket from 'ws';
import { Logger, LogLevel } from '../../utils/logger'; // Import Logger and LogLevel

/**
 * Represents a WebSocket server that handles client connections and message processing.
 */
export class WebSocketServer {
    private server: WebSocket.Server;
    private port: number;

    constructor(port: number) {
        this.port = port;
        this.server = new WebSocket.Server({ port });
    }

    /**
     * Starts the WebSocket server and sets up event handlers for client connections and message processing.
     * 
     * When a client connects, the server logs a message with server details (port number).
     * Sets up event handlers for the `message` and `close` events.
     * The `handleMessage` method is called whenever a client sends a message, and a message is logged when a client disconnects.
     */
    start(): void {
        Logger.info(`WebSocket server started on port http://localhost:${this.port}`); // Log server start with port info

        this.server.on('connection', (ws: WebSocket) => {
            Logger.info('Client connected.'); // Log client connection

            ws.on('message', (message: string) => {
                this.handleMessage(ws, message);
            });

            ws.on('close', () => {
                Logger.info('Client disconnected.'); // Log client disconnection
            });
        });
    }

    /**
     * Handles a message received from a WebSocket client.
     * 
     * The method first attempts to parse the message as JSON. If the parsing fails, an error is logged.
     * 
     * If the message is successfully parsed, the method checks the `event` property of the message data. Depending on the event, the method calls the corresponding event handler (e.g. `handleExampleEvent`). If the event is unknown, a warning is logged.
     * 
     * @param ws The WebSocket connection that received the message.
     * @param message The message received from the client.
     */
    private handleMessage(ws: WebSocket, message: string): void {
        let data: any;
        try {
            data = JSON.parse(message);
        } catch (error) {
            Logger.error('Invalid JSON received.'); // Log parsing error
            return;
        }

        switch (data.event) {
            case 'exampleEvent':
                this.handleExampleEvent(ws, data.data);
                break;
            // Add more event handlers as needed
            default:
                Logger.warn(`Unknown event: ${data.event}`); // Log unknown event
                break;
        }
    }

    /**
     * Handles the 'exampleEvent' received from a WebSocket client.
     * 
     * This method logs the received event data, and then sends a response back to the client with an 'exampleResponse' event and a message.
     * 
     * @param ws The WebSocket connection that received the 'exampleEvent'.
     * @param eventData The data associated with the 'exampleEvent'.
     */
    private handleExampleEvent(ws: WebSocket, eventData: any): void {
        // Handle the 'exampleEvent' here
        Logger.info(`Received 'exampleEvent' with data: ${JSON.stringify(eventData)}`); // Log received event data

        // Send a response back to the client
        const response = {
            event: 'exampleResponse',
            data: { message: 'Response from server.' }
        };
        ws.send(JSON.stringify(response));
    }
}
