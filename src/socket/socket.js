import { io } from 'socket.io-client';
import { url } from './socket_config.js';

const chatServerUrl = url.development;

export const socket = io(chatServerUrl, {
    autoConnect : false
});