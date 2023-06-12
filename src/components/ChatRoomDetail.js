import React from 'react';
import { useParams } from 'react-router-dom';
import OtherUserProfile from './OtherUserProfile.js';
import ChatInputField from './ChatInputField.js';
import ChatHistory from './ChatHistory.js';
import styles from './ChatRoomDetail.module.css';

const ChatRoomDetail = ({ rootUrl, userName, userStudentId }) => {
    const { chatRoomId } = useParams();

    return (
        <div className={styles.wrapper}>
            <OtherUserProfile userName={userName} />
            <ChatHistory chatRoomId={Number(chatRoomId)} userStudentId={userStudentId} />
            <ChatInputField userStuendId={userStudentId} rootUrl={rootUrl} chatRoomId={Number(chatRoomId)}/>
        </div>
    )
};

export default ChatRoomDetail;