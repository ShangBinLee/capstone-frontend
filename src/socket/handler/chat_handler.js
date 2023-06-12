import { db } from "../../DB/db"

const newChatHandler = ({ chat_id : id, ...others }) => {
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