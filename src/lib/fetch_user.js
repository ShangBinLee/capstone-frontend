import { fetchAPIWithAuth } from "./fetch_api";
/**
 * 중앙 서버 API를 통해 studentId에 해당하는 유저 정보를 가져옴
 * @param {Number} studentId - 조회할 상품 id
 * @param {string} rootUrl - 중앙 서버 API의 root URL
 */
const fetchUserOfStudentId = async (studentId, rootUrl) => fetchAPIWithAuth(`${rootUrl}/api/user/info/${studentId}`);

export {
  fetchUserOfStudentId
};