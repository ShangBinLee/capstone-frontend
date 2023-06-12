import { React } from 'react';
import styles from './MyOrder.module.css';

const MyBuyOrder = ({orderInfo}) => {
    const {
        create_date,
        imgUrl,
        title,
        saleProductName,
        offerPrice,
    } = orderInfo;

    return (
        <div className={styles.wrapper}>
            <div className={styles.date}>
                <span>거래 시작 날짜</span>
                <span>{create_date}</span>
            </div>
            <div className={styles.main_info}> 
                <img src={imgUrl} alt='' width="121" height="133"></img>
                <div>
                    <p className={styles.title}>{title}</p>
                    <p>{saleProductName}</p>
                    <p>{offerPrice}</p>
                </div>
            </div>
            <div className={styles.locker}>
                <span>구매 완료</span>
            </div>
        </div>
    );
}

export default MyBuyOrder;