import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import OtherUserProfile from './OtherUserProfile.js';
import ChatInputField from './ChatInputField.js';
import ChatHistory from './ChatHistory.js';
import styles from './ChatRoomDetail.module.css';
import { fetchMyUserInfo, fetchUserOfStudentId } from '../lib/fetch_user.js';
import Header from '../headfoot/header.js';
import Footer from '../headfoot/footer.js';
import { db } from '../DB/db.js';
import { fetchProduct } from '../lib/fetch_product.js';

const ChatRoomDetail = ({ rootUrl }) => {
    const { chatRoomId } = useParams();
    const [ userInfo, setUserInfo ] = useState({});
    const [ otherUserInfo, setOtherUserInfo ] = useState({});
    const [ isJoined, setIsJoined ] = useState(null);
    const naviagate = useNavigate();

    useEffect(() => {
        (async () => {
            const userInfo = await fetchMyUserInfo(rootUrl);
            setUserInfo(userInfo);
        })();
    }, [rootUrl]);

    useEffect(() => {
        db.chat_room.where('id').equals(Number(chatRoomId)).first()
        .then(async (result) => {
            if(result === undefined) {
                return setIsJoined(false);
            }

            setIsJoined(true);
            // 구매자 채팅방일 때
            if(result.buyer_id === userInfo.studentId) {
                const product = await fetchProduct(result.product_id, rootUrl);

                if(product.status >= 400) {
                    alert(product.message);
                    return;
                }

                const sellerInfo = await fetchUserOfStudentId(product.studentId, rootUrl);
                setOtherUserInfo(sellerInfo);
            } else { // 판매자 채팅방일 때
                const buyerInfo = await fetchUserOfStudentId(result.buyer_id, rootUrl);
                setOtherUserInfo(buyerInfo);
            }
        });
    }, [userInfo, chatRoomId, rootUrl]);

    if(isJoined === null) {
        return <body></body>;
    }
    if(isJoined === false) {
        alert("채팅방에 참여하고 있지 않습니다");
        naviagate('/chat-room/list');
    } else {
        return (
            <body>
                <Header/>
                <div className={styles.wrapper}>
                    <OtherUserProfile userName={otherUserInfo.userName} />
                    <ChatHistory chatRoomId={Number(chatRoomId)} userStudentId={userInfo.studentId} />
                    <ChatInputField userStudentId={userInfo.studentId} rootUrl={rootUrl} chatRoomId={Number(chatRoomId)}/>
                </div>
                <Footer/>
            </body>
        );
    }
};

export default ChatRoomDetail;