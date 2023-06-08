import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const ChatRoom = ({ chatRoomInfo }) => {
    const {
        user,
        product,
        chatRoom,
        lastChat
    } = chatRoomInfo;

    const {
        name
    } = user;

    const {
        imgUrl,
        title
    } = product;

    const {
        chat_room_id,
    } = chatRoom;

    const {
        chat_content,
        create_date
    } = lastChat;

    const now = dayjs();
    const createDate = dayjs(create_date);

    const dateString = (() => {
        if(now.isSame(createDate, 'day') === true) {
            return createDate.format('A HH:mm');
        } else if(now.isSame(createDate, 'year') === true) {
            return createDate.format('MM월 DD일');
        } else {
            return createDate.format('YYYY-MM-DD');
        }
    })();

    return (
        <Link to={`../${chat_room_id}`} relative='path'>
            <div>
                <img src={imgUrl} alt=""></img>
                <div>
                    <p>{name}</p>
                    <p>{title}</p>
                    <p>{chat_content}</p>
                </div>
                <div>
                    <p>{dateString}</p>
                </div>
            </div>
        </Link>
    );
};

export default ChatRoom;