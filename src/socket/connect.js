import { socket } from "./socket"

const connect = () => {
    socket.auth.token = localStorage.getItem('authorizaton');
    socket.connect();
};

export {
    connect
};