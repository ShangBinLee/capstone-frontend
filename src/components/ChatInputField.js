import React from "react";
import styles from './ChatInputField.module.css';

const ChatInputField = () => {
    return (
        <div className={styles.wrapper}>
            <button className={styles.btn_locker}>사물함</button>
            <div className={styles.input_wrapper}>
                <input type="text" className={styles.input_text}></input>
                <button className={styles.btn_send_chat} type='button'>전송</button>
            </div>
            <button className={styles.btn_offer}>가격</button>
        </div>
    );
};

export default ChatInputField;