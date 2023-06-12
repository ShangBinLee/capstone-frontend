import React, { useState } from "react";
import styles from './LockerDisplay.module.css';

const LockerDisplay = ({ chooseBuildingNum }) => {
    const [ buildingNum, setBuilingNum ] = useState("9");

    return (
        <div className={styles.wrapper}>
            <select className={styles.select} value={buildingNum} onChange={(e) => setBuilingNum(e.target.value)}>
                <option value="1">인돈기념관</option>
                <option value="5">경상대학</option>
                <option value="8">학생회관</option>
                <option value="9">공과대학</option>
                <option value="11">인사례교양동</option>
                <option value="56">56주년기념관</option>
            </select>
            <button className={styles.btn} onClick={() => chooseBuildingNum(buildingNum)}>선택</button>
        </div>
    );
};

export default LockerDisplay;