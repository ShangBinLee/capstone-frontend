import { io } from 'socket.io-client';
import { readFileSync } from 'fs';

const config = JSON.parse(readFileSync('./socket_config.json'));
const url = config.url[process.NODE_ENV];

export const socket = io(url, {
    autoConnect : false
});