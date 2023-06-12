const confirmOffer = (buyerId, productId, offerPrice, rootUrl) => {
    fetch(
        `${rootUrl}api/saleproduct/order/confirmation/${buyerId}/${productId}`,
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
};

export {
    confirmOffer
};