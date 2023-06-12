import { db } from "../../DB/db.js"

const newChatHandler = ({ error_message, chat_id : id, ...others }) => {
    if(error_message !== undefined) {
        return alert(error_message);
    }
    db.chat.put({
        id,
        ...others
    });
};

const offerPriceHandler = ({ chat_room_id : id, ...others }) =>{
    db.offer.put({
        id,
        ...others
    });
};

export {
    newChatHandler,
    offerPriceHandler
};