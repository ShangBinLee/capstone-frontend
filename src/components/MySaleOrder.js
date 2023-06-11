import { React, useEffect, useState } from 'react';

const MySaleOrder = ({orderInfo}) => {
    const {
        title,
        saleProductName,
        imgUrl,
        price,
        orderState,
        date
    } = orderInfo;

    return (
        <div>
            <div>
                <span>판매 게시 날짜</span>
                <span>{date}</span>
            </div>
            <div>
                <img src= {imgUrl} alt='' width="121" height="133"></img>
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

export default MySaleOrder;