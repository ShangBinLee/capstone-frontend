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

const joinNewChatRoomHandler = ({ chat_room_id, buyer_id, ...others }) =>{
    db.chat_room.put({
        id : chat_room_id,
        buyer_id : buyer_id === undefined ? null : buyer_id,
        ...others
    });
};

export {
    connectChatRoomsHandler,
    getChatRoomsHandler,
    joinNewChatRoomHandler
};