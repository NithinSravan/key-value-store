const net = require('net');
const readline = require('readline');

const client  = new net.Socket();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.connect(6379,'localhost',()=>{
    console.log('Connected to Go Server');
    console.log("Type your command:");
    rl.on('line',(input)=>{
        client.write(input + '\r\n');
    })

});

client.on('data',(data)=>{
    console.log('Received from server:',data.toString().trim());
    console.log("Type your command:");
});
client.on('close',()=>{
    console.log('Connection closed');
    rl.close();
});
client.on('error',(err)=>{
    console.error('Connection error:', err);
    rl.close();
});
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// client.connect(6379, 'localhost', () => {
//     console.log('Connected to Go server');
//     console.log('Type your command (e.g., ping):');
    
//     rl.on('line', (input) => {
//         client.write(input + '\r\n');
//     });
// });

// client.on('data', (data) => {
//     console.log('Received from server:', data.toString().trim());
//     console.log('Type your command (e.g., ping):');
// });

// client.on('close', () => {
//     console.log('Connection closed');
//     rl.close();
// });

// client.on('error', (err) => {
//     console.error('Connection error:', err);
//     rl.close();
// });