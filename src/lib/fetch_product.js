import { fetchAPIWithAuth } from "./fetch_api";
/**
 * 중앙 서버 API를 통해 전체 상품 정보를 조회함
 * @param {string} rootUrl - 중앙 서버 API의 root URL
 */
const fetchSellerProductsAll = (rootUrl) => fetchAPIWithAuth(`${rootUrl}/api/saleproduct/find/all`);

/**
 * 중앙 서버 API를 통해 productId에 해당하는 상품 정보를 가져옴
 * @param {Number} productId - 조회할 상품 id
 * @param {string} rootUrl - 중앙 서버 API의 root URL
 */
const fetchProduct = (productId, rootUrl) => fetchAPIWithAuth(`${rootUrl}/api/saleproduct/find/${productId}`);

export {
  fetchSellerProductsAll,
  fetchProduct
};