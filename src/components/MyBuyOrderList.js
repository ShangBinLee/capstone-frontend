import { React, useEffect, useState } from "react";
import MyBuyOrder from "./MyBuyOrder.js";
import { fetchMyBuyOrder } from "../lib/fetch_order.js";
import styles from './MyOrderList.module.css';

const MyBuyOrderList = ({ rootUrl }) => {
    const [ orders, setOrders ] = useState([]);

    useEffect(() => {
        (async () => {
            const orders = await fetchMyBuyOrder(rootUrl);

            setOrders(orders);
        })()
    }, []);

    return (
        <div className={styles.wrapper}>
            {orders.map((order) => <MyBuyOrder orderInfo={order} />)}
        </div>
    );
};

export default MyBuyOrderList;