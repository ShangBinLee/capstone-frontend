/**
 * 요청 url을 받아 중앙 서버 API를 통해 authorization 헤더와 함께 데이터를 fetch하고
 * 간단한 예외 처리 후 데이터를 추출해 반환하는 함수
 * @param {String} reqUrl - 요청 URL
 * @param {Object} options - fetch 함수에 전달할 옵션
 * @return {Promise}
 */
const fetchAPIWithAuth = async (reqUrl) => {
    const res = await fetch(reqUrl, {
        headers : {
            'Content-type' : 'application/json',
            'Authorization' : localStorage.getItem('authorization')
        }
    });
  
    const result = await res.json();

    if(res.status >= 500) {
        throw new Error(`${res.status} ${result.error}`);
    }
    if(res.status >= 400) {
        throw result;
    }

    return result.data;
};

export {
    fetchAPIWithAuth
};