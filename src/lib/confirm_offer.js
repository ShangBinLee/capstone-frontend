const confirmOffer = async (buyerId, productId, offerPrice, rootUrl) => {
    const res = await fetch(
        `${rootUrl}/api/saleproduct/order/confirmation/${buyerId}/${productId}`,
        {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : localStorage.getItem('authorization'),
            },
            body : JSON.stringify({
                offerPrice
            })
        }
    );

    const result = await res.json();

    if(res.status >= 500) {
        throw new Error(`${res.status} ${result.error}`);
    }
    if(res.status >= 400) {
        throw result;
    }

    return result;
};

export {
    confirmOffer
};