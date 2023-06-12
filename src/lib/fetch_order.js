import { fetchAPIWithAuth } from "./fetch_api.js";

const fetchMyBuyOrder = (rootUrl) => fetchAPIWithAuth(`${rootUrl}/api/order/buy`);
const fetchMySaleOrder = (rootUrl) => fetchAPIWithAuth(`${rootUrl}/api/order/sale`);

export {
    fetchMyBuyOrder,
    fetchMySaleOrder
};