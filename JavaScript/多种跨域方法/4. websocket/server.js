let express = require("express")
let app = express()
let WebSocket = require("ws")
let socket = new WebSocket.Server({port: 3000})
socket.on("connection", function(ws) {
    ws.on("message", function(data) {
        console.log(data)
        ws.send("连接已建立")
    })
})
