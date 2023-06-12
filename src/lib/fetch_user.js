import { fetchAPIWithAuth } from "./fetch_api";
/**
 * 중앙 서버 API를 통해 studentId에 해당하는 유저 정보를 가져옴
 * @param {Number} studentId - 조회할 상품 id
 * @param {string} rootUrl - 중앙 서버 API의 root URL
 */
const fetchUserOfStudentId = async (studentId, rootUrl) => fetchAPIWithAuth(`${rootUrl}/api/user/info/${studentId}`);

/**
 * 중앙 서버 API를 통해 본 유저의 유저 정보를 조회함
 */
const fetchMyUserInfo = async (rootUrl) => fetchAPIWithAuth(`${rootUrl}/api/user/info`);

export {
  fetchUserOfStudentId,
  fetchMyUserInfo
};