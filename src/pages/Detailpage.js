import { React, useEffect, useState } from 'react';
import {fetchSellerProductsAll, fetchProduct, fetchMyProductsAll} from '../lib/fetch_product.js'
import { useScrollTrigger } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom';

export default function Detail({rootUrl}) {
  const {productId} = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  const backpage = () => {
    navigate(-1);
  };


  useEffect(() => {
    const bbb = async () => {
      const product = await fetchProduct(productId, rootUrl);
      setProduct(product);
    };

    bbb();
  }, []);
  
  return (
    <div className="container" style={{fontSize: 25}}>
      <div className="row">
        <div className="col-md-6" stlye = {{marginBottom: "50px"}}>
          <img 
            src= {product.imgUrl}
            width="300px" 
            height="400px"
          />
        </div>
        <div style = {{width: "700px",display: "flex", flexDirection: "column"}}>
          <p>
            {product.title}
          </p>
          <div>
            <span>{product.saleProductName}</span>
            <span>{product.amount}</span>
          </div>
          <p>
            {product.content}
          </p>
          <button onClick={backpage} style = {{width: "500px", fontSize:20}}>이전 페이지</button> 
          <button style = {{width: "500px", fontSize:20}}>채팅방 이동하기</button> 
        </div>
      </div>
    </div>
  )
}