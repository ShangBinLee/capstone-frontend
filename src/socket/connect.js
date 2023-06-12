import { socket } from "./socket.js"

const connect = () => {
    socket.auth = {
        token : localStorage.getItem('authorization')
    };

    socket.connect();
};

const disconnect = () => {
    socket.disconnect();
};

export {
    connect,
    disconnect
};