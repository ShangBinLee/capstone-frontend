import React from "react";
import styles from "./OtherUserProfile.module.css";

const OtherUserProfile = ({ userName }) => {
    return (
        <div className={styles.profile}>
            <div>
                <img src="" alt="" width="125" height="120"></img>
            </div>
            <div className={styles.user_info}>
                <p>
                    {userName}
                </p>
            </div>
        </div>
    );
};

export default OtherUserProfile;