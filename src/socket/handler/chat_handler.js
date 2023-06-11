import { db } from "../../DB/db"

const getChatHistory = ({ chat_room_id, chat_history }) => {
    chat_history.forEach(({ chat_id : id, ...others}) =>{
        db.chat.put({
            id,
            ...others
        });
    });
};

const newChatHandler = ({ chat_id : id, ...others }) => {
    db.chat.put({
        id,
        ...others
    });
};

export {
    getChatHistory,
    newChatHandler
};