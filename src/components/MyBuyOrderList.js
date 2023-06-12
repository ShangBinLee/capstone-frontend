import { React, useEffect, useState } from "react";
import MyBuyOrder from "./MyBuyOrder.js";
import { fetchMyBuyOrder } from "../lib/fetch_order.js";

const MyBuyOrderList = ({ rootUrl }) => {
    const [ orders, setOrders ] = useState([]);

    useEffect(() => {
        (async () => {
            const orders = await fetchMyBuyOrder(rootUrl);

            setOrders(orders);
        })()
    }, []);

    return orders.map((order) => <MyBuyOrder orderInfo={order} />);
};

export default MyBuyOrderList;