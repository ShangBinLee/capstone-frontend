import { socket } from "./socket"

const connect = () => {
    socket.auth.token = localStorage.getItem('authorizaton');
    socket.connect();
};

const disconnect = () => {
    socket.disconnect();
};

export {
    connect,
    disconnect
};