import { fetchAPIWithAuth } from "./fetch_api";

const checkLockerUnassigned = (buildingNum, rootUrl) => {
    return fetch(`${rootUrl}/api/web/locker/unassigned`, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'Authorization' : localStorage.getItem('authorization')
        },
        body : JSON.stringify({
            buildingNum
        })
    })
    .then((res) => res.json())
    .then((result) => result.data);
};

const assignLocker = (buyerStudentId, productId, lockerId, rootUrl) => {
    return fetchAPIWithAuth(`${rootUrl}/api/web/locker/assign/${buyerStudentId}/${productId}/${lockerId}`);
};

export {
    checkLockerUnassigned,
    assignLocker
};