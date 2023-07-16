const WebSocket = require("ws");
console.log("start")
const wss = new WebSocket.Server({ port:8082 });

wss.on("connection", ws=> {
    console.log("we are connexted");

    ws.on("message", data =>{
        console.log(data.toString("utf-8"));
        ws.send(data.toString());
    });
});