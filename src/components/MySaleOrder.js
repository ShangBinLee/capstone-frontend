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
        <div style={{display: "flex", alignItems:"center", border: "1px solid black", width:"876px", height:"157px", paddingLeft:"16px"}}>
            <div style={{display: "block", alignItems: "center"}}>
                <span style={{display:"block", textAlign:"center", marginBottom: '8px'}}>거래 시작 날짜</span>
                <span style={{display:"block", textAlign:"center", marginBottom: '8px'}} >{date}</span>
            </div>
            <div style={{display:"flex", alignItems: "center", marginLeft:"16px"}}> 
                <img src={imgUrl} alt='' width="121" height="133" style={{justifyContent: "space-between", margin: '0 16px 0 16px'}}></img>
                <div style={{marginLeft:"16px"}}>
                    <p>{title}</p>
                    <p>{saleProductName}</p>
                    <p>{price}</p>
                </div>
            </div>
            <div style={{display:"block", alignItems:"center", marginLeft:"130px"}}>
                <span style={{display:"block", textAlign:"center", marginBottom: '8px'}}>{orderState}</span>
                <span style={{display:"block", textAlign:"center",marginBottom: '8px'}}>사물함</span>
                <button style={{marginLeft: '8px', padding: '8px 16px', backgroundColor: 'black', border: 'none', color: 'white', cursor: 'pointer',}}>확인하기</button>
            </div>
        </div>
    );
}

export default MySaleOrder;