const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const server = net.createServer(connection => {
    console.log('Nueva conexión de cliente establecida.');
    connection.write('Bienvenido al servidor!');

    connection.on('data', (data) => {
        console.log(`Cliente dice: ${data.toString()}`);
    });

    rl.on('line', (input) => {
        connection.write(input);
    });
});

server.listen(5000, '127.0.0.1', () => {
    console.log('Servidor escuchando en el puerto 5000');
});
