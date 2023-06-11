import { db } from "../../DB/db.js";
import { getChatHistory, getChatRooms } from "../chat_room.js";

const connectChatRoomsHandler = ({ success, room_ids_fail }) => {
    if(success === true) {
        getChatRooms();
    }
};

const getChatRoomsHandler = async (chatRooms) => {
    await Promise.all(chatRooms.map(async ({
        chat_room_id,
        modified_date,
		product_id,
		buyer_id
    }) => {
        const updated = await db.chat_room.update(chat_room_id, { modified_date });

        if(updated !== false) {
            await db.chat_room.add({
                id : chat_room_id,
                modified_date,
                product_id,
                buyer_id
            });
        }
    }));

    getChatHistory();
};

const joinNewChatRoomHandler = ({ chat_room_id, buyer_id, ...others }) =>{
    db.chat_room.put({
        id : chat_room_id,
        buyer_id : buyer_id === undefined ? null : buyer_id,
        ...others
    });
};

const notificateNewChatRoomHandler = ({ chat_room_id : id, ...others }) => {
    db.chat_room.put({
        id,
        ...others
    });
};

export {
    connectChatRoomsHandler,
    getChatRoomsHandler,
    joinNewChatRoomHandler,
    notificateNewChatRoomHandler
};