import { React, useEffect, useState } from "react";
import MySaleOrder from "./MySaleOrder.js";
import { fetchMyProductsAll } from "../lib/fetch_product.js";
import { fetchMySaleOrder } from "../lib/fetch_order.js";
import styles from './MyOrderList.module.css';

const MySaleOrderList = ({ rootUrl }) => {
    const [ orders, setOrders ] = useState([]);

    useEffect(() => {
        (async () => {
            const myProducts = await fetchMyProductsAll(rootUrl);
            const mySaleOrder = await fetchMySaleOrder(rootUrl);

            const orders = myProducts
            .filter((product) => {
                return mySaleOrder.find((order) => order.id === product) !== false;
            })
            .map((product) => ({
                orderStatus : '판매 중',
                ...product
            }))
            .concat(
                mySaleOrder.map((order) => ({
                    orderStatus : '판매 완료',
                    ...order
                }))
            );

            setOrders(orders);
        })()
    }, []);

    return (
        <div className={styles.wrapper}>
            {orders.map((order) => <MySaleOrder orderInfo={order} />)}
        </div>
    );  
};

export default MySaleOrderList;