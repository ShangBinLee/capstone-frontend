import { fetchMyProductsAll } from "../lib/fetch_product"
import { socket } from "./socket.js";
import { db } from "../DB/db";

const connectChatRooms = async (rootUrl) => {
    const eventName = 'connect_chat_rooms';

    const myProducts = await fetchMyProductsAll(rootUrl);
    const productIds = myProducts.map((product) => product.id);

    socket.emit(eventName, {
        productIds,
        authorization : localStorage.getItem('authorization')
    });
};

const getChatRooms = () => {
    socket.emit('get_chat_rooms');
};

const getChatHistory = async () => {
    const eventName = 'get_chat_history';
    const chatRooms = await db.chat_room.orderBy('modified_date').toArray();

    const roomLastChats = await Promise.all(chatRooms.map(async (room) => {
        const chats = await db.chat
        .where('chat_room_id')
        .equals(room.id)
        .reverse()
        .sortBy('create_date');
            
        return {
            chat_room_id : room.id,
            last_chat_id : chats[0]
        };
    }));

    const message = roomLastChats.filter((lastChat) => lastChat !== undefined);

    socket.emit(eventName, message);
};

export {
    connectChatRooms,
    getChatRooms,
    getChatHistory
};