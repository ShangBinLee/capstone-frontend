import { connectChatRooms } from "./chat_room.js";
import { connect } from "./connect.js";
import { newChatHandler, offerPriceHandler } from "./handler/chat_handler.js";
import { connectChatRoomsHandler, getChatHistoryHandler, getChatRoomsHandler, joinNewChatRoomHandler, notificateNewChatRoomHandler } from "./handler/chat_room_handler.js";
import { socket } from "./socket.js";

const initializeSocket = (rootUrl) => {
    if(socket.connected === true) {
        throw new Error('It is already connected!');
    }

    socket.on('connection', ({ status }) => {
        connectChatRooms(rootUrl);
    });

    socket.on('connect_chat_rooms', connectChatRoomsHandler);
    socket.on('get_chat_rooms', getChatRoomsHandler);
    socket.on('get_chat_history', getChatHistoryHandler);
    socket.on('join_new_chat_room', joinNewChatRoomHandler);
    socket.on('notificate_new_chat_room', notificateNewChatRoomHandler);
    socket.on('new_chat', newChatHandler);
    socket.on('offer_price', offerPriceHandler);

    connect();
};

export {
    initializeSocket
};