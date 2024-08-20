const WebSocket = require('ws');
const express = require('express');

const app=express()

const onMessage = (ws, data) => {
    ws.send(`recebido!`);
}

const onConnection = (ws, req) => {
    ws.on('message', data => onMessage(ws, data));
    console.log(`onConnection`);
}

const server = app.listen(3000,()=>console.log('servidor executando'));
const wss = new WebSocket.Server({server});
wss.on('connection', onConnection);
