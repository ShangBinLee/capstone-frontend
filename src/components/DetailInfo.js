import React from 'react';
import styles from './DetailInfo.module.css';

const DetailInfo = (props) => {
    if(props.opened === true) {
        const { 
            department,
            lecture,
            professor,
            seller
        } = props.detailInfo;
        return (
            <div className={styles.detail_info}>
                <span className={`${styles.detail_info_text} ${styles.bold}`}>{department}</span>
                <span className={styles.detail_info_text}>{lecture}</span>
                <span className={styles.detail_info_text}>{professor}</span>
                <div className={`${styles.seller_rating} ${styles.detail_info_text}`}>
                    <span>{seller.name}</span>
                    <span>{seller.rating}</span>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default DetailInfo;