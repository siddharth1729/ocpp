# OCPP WebSocket Server

This project implements an OCPP (Open Charge Point Protocol) WebSocket server in Node.js and TypeScript. The server is designed to communicate with Electric Vehicle (EV) charging stations using the OCPP protocol over WebSocket connections.


EV charging stations compatible with OCPP 2.6 over WebSocket

### Installation

Clone the repository to your local machine:

```bash

git clone https://github.com/your-username/ocpp-websocket-server.git
```

Navigate to the project directory:

```bash
cd ocpp-websocket-server
```

Install project dependencies using npm:
```bash
npm install
```

### Configuration

Configure the WebSocket server settings in the config.json file:

Specify the server port ("port": 8080 by default)

Add any additional configuration options as needed
Usage

Start the OCPP WebSocket server:

```bash
npm start
```

This will compile the TypeScript code and start the WebSocket server on the specified port.

Connect OCPP-compatible EV charging stations to the WebSocket server:

Use the WebSocket URL provided by the server (e.g., ws://localhost:8080)
