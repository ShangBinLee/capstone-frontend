import { io } from 'socket.io-client';
import { url } from './socket_config.js';

export const socket = io(url, {
    autoConnect : false
});