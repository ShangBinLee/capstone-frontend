import { socket } from "./socket";

const sendNewChat = (chatRoomId, chatContent) => {
    const eventName = 'new_chat';

    socket.emit(eventName, {
        chat_room_id : chatRoomId,
        chat_content : chatContent
    });
};

export {
    sendNewChat
};