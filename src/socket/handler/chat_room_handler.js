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
        ...others
    }) => {
        const updated = await db.chat_room.update(chat_room_id, { id : chat_room_id, ...others });

        if(updated === 0) {
            db.chat_room.put({ id : chat_room_id, ...others });
        }
    }));
    
    
    getChatHistory();
};

const getChatHistoryHandler = ({ chat_room_id, chat_history }) => {
    chat_history?.forEach(({ chat_id : id, ...others}) =>{
        db.chat.put({
            id,
            ...others
        });
    });
};

const joinNewChatRoomHandler = async ({ error_message, chat_room_id, buyer_id, ...others }) =>{
    if(error_message !== undefined) {
        return alert(error_message);
    }
    if(chat_room_id === undefined) {
        return;
    }
    await db.chat_room.put({
        id : chat_room_id,
        buyer_id : buyer_id === undefined ? null : buyer_id,
        ...others
    });

    alert(`${chat_room_id} 번 채팅방에 참여하셨습니다`);
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
    getChatHistoryHandler,
    joinNewChatRoomHandler,
    notificateNewChatRoomHandler
};