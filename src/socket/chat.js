import { socket } from "./socket.js";

const sendNewChat = (chatRoomId, chatContent) => {
    const eventName = 'new_chat';

    socket.emit(eventName, {
        chat_room_id : chatRoomId,
        chat_content : chatContent
    });
};

const offerPrice = (chatRoomId, offerPrice) => {
    const eventName = 'offer_price';


    socket.emit(eventName, {
        chat_room_id : chatRoomId,
        offer_price : offerPrice,
    });
};

export {
    sendNewChat,
    offerPrice
};