import { React, useEffect, useState } from "react";
import MyBuyOrder from "./MyBuyOrder.js";
import { fetchMyBuyOrder } from "../lib/fetch_order.js";
import styles from './MyOrderList.module.css';
import Header from "../headfoot/header.js";
import Footer from "../headfoot/footer.js";

const MyBuyOrderList = ({ rootUrl }) => {
    const [ orders, setOrders ] = useState([]);

    useEffect(() => {
        (async () => {
            const orders = await fetchMyBuyOrder(rootUrl);

            setOrders(orders);
        })()
    }, []);

    return (
        <body>
            <Header/>
            <div className={styles.wrapper}>
                {orders.map((order) => <MyBuyOrder orderInfo={order} />)}
            </div>
            <Footer/>
        </body>
    );
};

export default MyBuyOrderList;