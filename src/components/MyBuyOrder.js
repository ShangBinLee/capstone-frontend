import { React, useEffect, useState } from 'react';

const MyBuyOrder = ({orderInfo}) => {
    const {
        title,
        saleProductName,
        imgUrl,
        price,
        orderState,
        date
    } = orderInfo;

    return (
        <div style={{border: "1px solid black"}}>
            <div style={{display: "flex", alignItems: "center"}}>
                <span>거래 시작 날짜</span>
                <span>{date}</span>
            </div>
            <div>
                <img src={imgUrl} alt='' width="121" height="133"></img>
                <div>
                    <p>{title}</p>
                    <p>{saleProductName}</p>
                    <p>{price}</p>
                </div>
            </div>
            <div>
                <span>{orderState}</span>
                <span>사물함</span>
                <button>확인하기</button>
            </div>
        </div>
    );
}

export default MyBuyOrder;