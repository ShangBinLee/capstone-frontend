import React from 'react';
import styles from './ToggleArrow.module.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const toggleArrow = (props) => {
    return (
    <div className={styles.toggle_arrow} onClick={props.onClick}>
        <button className={`${styles.btn_toggle_detail} ${props.opened ? '' : styles.fold}`}>
            <ExpandMoreIcon/>
        </button>
    </div>
    );
};

export default toggleArrow;