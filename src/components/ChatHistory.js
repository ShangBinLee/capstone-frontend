import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../DB/db";
import dayjs from "dayjs";
import styles from "./ChatHistory.module.css";

const ChatHistory = ({ chatRoomId, userStudentId }) => {
    const chatHistory = useLiveQuery(() => {
        return db.chat
        .where('chat_room_id')
        .equals(chatRoomId)
        .sortBy('create_date');
    });

    return (
        <div className={styles.chat_history}>
            {
                chatHistory?.map((chat) => {
                    const dateString = dayjs(chat.create_date).format('YYYY-MM-DD')
                    return (
                        <div className={`${styles.chat} ${userStudentId === chat.sender_id ? styles.self : styles.other}`}>
                            <div className={styles.date}>
                                {dateString}
                            </div>
                            <div className={styles.content}>
                                {chat.chat_content}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ChatHistory;