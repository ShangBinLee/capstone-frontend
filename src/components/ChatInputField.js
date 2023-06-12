import React, { useEffect, useState } from "react";
import styles from './ChatInputField.module.css';
import { offerPrice, sendNewChat } from "../socket/chat.js";
import BuyerPriceDisplay from "./BuyerPriceDisplay.js";
import SellerPriceDisplay from "./SellerPriceDisplay.js";
import LockerDisplay from "./LockerDisplay.js";
import { db } from "../DB/db";
import { fetchProduct } from "../lib/fetch_product.js";
import { confirmOffer } from "../lib/confirm_offer.js";
import { assignLocker, checkLockerUnassigned } from "../lib/locker";
import { useNavigate } from "react-router-dom";

const ChatInputField = ({ userStudentId, rootUrl, chatRoomId }) => {
    const [ chatContent, setChatContent ] = useState();
    const [ priceDisplay, setPriceDisplay ] = useState(false);
    const [ lockerDisplay, setLockerDisplay ] = useState(false);
    const [ defaultPrice, setDefaultPrice ] = useState(0);
    const [ buyerId, setBuyerId ] = useState();
    const [ productId, setProductId ] = useState();
    const navigate = useNavigate();

    const toggleLockerDisplay = () => {
        setLockerDisplay(!lockerDisplay);
        setPriceDisplay(false);
    };

    const togglePriceDisplay = () => {
        setPriceDisplay(!priceDisplay);
        setLockerDisplay(false);
    };

    useEffect(() => {
        (async () => {
            const chatRoom = await db.chat_room.where('id').equals(chatRoomId).first();

            if(chatRoom === undefined) {
                alert('채팅방에 참여하고 있지 않습니다');
                navigate('/chat-room/list');
                return;
            }
            const { product_id, buyer_id } = chatRoom;
            const { amount : defaultPrice } = await fetchProduct(product_id, rootUrl);

            setProductId(product_id);
            setBuyerId(buyer_id);
            setDefaultPrice(defaultPrice);
        })();
    }, [chatRoomId, rootUrl, navigate]);

    let toggledUI;
    // 구매자일 때
    if(buyerId === userStudentId) {
        if(priceDisplay === true) {
            toggledUI = (<BuyerPriceDisplay props={{
                userStudentId,
                chatRoomId,
                defaultPrice,
                onClickOfferPrice : (price) => offerPrice(chatRoomId, price)
            }}></BuyerPriceDisplay>);
        } else {
            toggledUI = null;
        }
    }
    // 판매자일 때
    else {
        if(priceDisplay === true) {
            toggledUI = (<SellerPriceDisplay props={{
                chatRoomId,
                defaultPrice,
                onConfirmOffer : async (price) => {
                    try{
                        await confirmOffer(buyerId, productId, price, rootUrl);
                        alert('상품에 대한 거래가 성립되었습니다');
                    } catch(e) {
                        if(e instanceof Error) {
                            throw e;
                        }
                        alert(e.message);
                    }
                }
            }}></SellerPriceDisplay>);
        } else if(lockerDisplay === true) {
            toggledUI = (<LockerDisplay chooseBuildingNum={async (lockerNum) => {
                const [ locker ] = await checkLockerUnassigned(lockerNum, rootUrl);

                if(locker === undefined) {
                    return alert(`${lockerNum}번 건물에 빈 사물함이 없습니다`);
                }

                try {
                    const result = await assignLocker(buyerId, productId, locker.id, rootUrl);
                    alert(`
                    건물 번호 : ${result.buildingNum}
                    사물함 id : ${result.id},
                    비밀번호 : ${result.lockerPassword}
                    `);
                } catch(e) {
                    if(e.status >= 500) {
                        throw e;
                    }
                    alert(e.message);
                }
                alert()
            }}></LockerDisplay>);
        } else {
            toggledUI = null;
        }
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.trigger_wrapper}>
                <button className={styles.btn_locker} onClick={toggleLockerDisplay}>사물함</button>
                <div className={styles.input_wrapper}>
                    <input type="text" className={styles.input_text} onChange={(e) => setChatContent(e.target.value)}></input>
                    <button className={styles.btn_send_chat} type='button' onClick={() => sendNewChat(chatRoomId, chatContent)}>전송</button>
                </div>
                <button className={styles.btn_offer} onClick={togglePriceDisplay}>가격</button>
            </div>
            {toggledUI}
        </div>
    );
};

export default ChatInputField;