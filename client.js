const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const socket = new net.Socket();

socket.connect(5000, '127.0.0.1', () => {
    console.log("Conexión establecida con el servidor");
    
    rl.on('line', (input) => {
        socket.write(input);
    });
});

socket.on('data', (data) => {
    console.log(`Mensaje del servidor: ${data.toString()}`);
});

socket.on('close', () => {
    console.log("Conexión cerrada por el servidor");
});
