import { db } from "../../DB/db";
import { getChatRooms } from "../chat_room";

const connectChatRoomsHandler = ({ success, room_ids_fail }) => {
    if(success === true) {
        getChatRooms();
    }
};

const getChatRoomsHandler = (chatRooms) => {
    chatRooms.forEach(async ({
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
    });
};

export {
    connectChatRoomsHandler,
    getChatRoomsHandler
};