const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");

const wss = new WebSocket.Server({ server:server });

wss.on("connection",(ws)=>{
    ws.send("Something");
    ws.on("message",(message)=>{
        if(message.length > 5){
            ws.send( message)
        }else{
            ws.send(message);
        }
    });
   
});
app.get("/", (req,res)=>{res.send("Hello World!")});
server.listen(80)