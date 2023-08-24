const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname));

io.on('connection', (socket) => {
    console.log('Usuário conectado.');

    socket.on('addActivity', (text) => {
        console.log('Atividade adicionada:', text);
        io.emit('activityAdded', text); // Envia a atividade para todos os clientes
    });

    socket.on('disconnect', () => {
        console.log('Usuário desconectado.');
    });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
