import React, { useState, useEffect } from 'react';
import styles from './PriceDisplay.module.css';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../DB/db';

const BuyerPriceDisplay = ({ props }) => {
    const {
        chatRoomId,
        defaultPrice,
        onClickOfferPrice
    } = props;

    const [ offerPrice, setOfferPrice ] = useState(defaultPrice);

    const offer = useLiveQuery(() => db.offer.where('id').equals(chatRoomId).first());

    useEffect(() => {
        if(offer !== undefined) {
            setOfferPrice(offer.offer_price);
        }
    }, [offer]);

    return (
        <div className={styles.wrapper}>
            <p>현재 가격 {defaultPrice} 원</p>
            <p>제시 가격</p>
            <div className={styles.input_wrapper}>
                {
                    offer !== undefined
                    ? <input readonly className={styles.input} type="number" value={offerPrice}></input>
                    : <input className={styles.input} type="number" value={offerPrice} onChange={(e) => setOfferPrice(e.target.value)}></input>
                }
                <span>원</span>
                {
                    offer === undefined
                    ? <button className={styles.input} onClick={() => onClickOfferPrice(offerPrice)}>제시</button>
                    : null
                }
            </div>
        </div>
    );
};

export default BuyerPriceDisplay;