import React from 'react';
import styles from './ToggleArrow.module.css';

const toggleArrow = (props) => {
    return (
    <div className={styles.toggle_arrow} onClick={props.onClick}>
        <button className={`${styles.btn_toggle_detail} ${props.opened ? '' : styles.fold}`}>
            <img src="img/expand-arrow.png" alt=""></img>
        </button>
    </div>
    );
};

export default toggleArrow;