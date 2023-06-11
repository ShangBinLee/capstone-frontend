import React from 'react';
import { useParams } from 'react-router-dom';
import OtherUserProfile from './OtherUserProfile.js';
import ChatInputField from './ChatInputField.js';
import ChatHistory from './ChatHistory.js';
import styles from './ChatRoomDetail.module.css';

const ChatRoomDetail = ({ userName, userStudentId }) => {
    const { chatRoomId } = useParams();

    return (
        <div className={styles.wrapper}>
            <OtherUserProfile userName={userName} />
            <ChatHistory chatRoomId={Number(chatRoomId)} userStudentId={userStudentId} />
            <ChatInputField />
        </div>
    )
};

export default ChatRoomDetail;