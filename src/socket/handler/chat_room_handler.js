import { getChatRooms } from "../chat_room";

const connectChatRoomsHandler = ({ success, room_ids_fail }) => {
    if(success === true) {
        getChatRooms();
    }
};

export {
    connectChatRoomsHandler
};