/* eslint-disable no-console */
import express from 'express';

const server = express();
server.use(express.json());

server.post('/', (request, response) => {
    const { name, email } = request.body;
    return response.json({ message: name, email });
});

server.listen(3333, () => {
    console.log('Server GoStck! Iniciado! 🚀 <3');
});
