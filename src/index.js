import * as dotenv from "dotenv";
dotenv.config(); // load configuration

import { WebSocketServer } from "ws";
import { Client } from "node-osc";

var _timeElapsed;

const osc = new Client("0.0.0.0", 9000);
const server = new WebSocketServer({ port: process.env.webserver_port });

server.on("connection", (client) => {
  client.on("message", (data, isBinary) => {
    const payload = JSON.parse(data);
    _timeElapsed = payload.time_elapsed;
    osc.send(
      "/chatbox/input",
      [
        // format the text nicely.
        _timeElapsed !== payload.time_elapsed
          ? `${payload.creator} - ${payload.name} ${process.env.padding_text} ${payload.time_elapsed}`
          : `${payload.creator} - ${payload.name} ${process.env.padding_text} ${process.env.paused_text}`,
        true, // bypass the chatbox pop-up and send the message immediately.
      ],
      (err) => {
        if (err) throw err;
      }
    );
  });
});

console.log(
  `Started websocket server at ws://localhost:${process.env.webserver_port}!`
);
