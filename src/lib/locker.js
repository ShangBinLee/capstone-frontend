const checkLockerUnassigned = (buildingNum, rootUrl) => {
    return fetch(`${rootUrl}/api/web/locker/unassigned`, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'Authorization' : localStorage.getItem('authorization')
        }
    })
    .then((res) => res.json())
    .then((result) => result.data);
};

export {
    checkLockerUnassigned
};