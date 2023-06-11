import { fetchMyProductsAll } from "../lib/fetch_product"
import { socket } from "./socket.js";

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

export {
    connectChatRooms,
    getChatRooms
};