import { React, useEffect, useState } from 'react';
import { fetchProduct } from '../lib/fetch_product.js'
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../headfoot/header.js';
import Footer from '../headfoot/footer.js';
import { joinNewChatRoom } from '../socket/chat_room.js';

export default function Detail({rootUrl}) {
  const {productId} = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  const backpage = () => {
    navigate(-1);
  };

  const onClickJoinChatRoom = () => {
    joinNewChatRoom(productId);
  };

  useEffect(() => {
    const bbb = async () => {
      const product = await fetchProduct(productId, rootUrl);
      setProduct(product);
    };

    bbb();
  }, []);
  
  return (
    <body>
      <Header/>
      <div className="container" style={{display:'flex', justifyContent:'center', height:'1131px', fontSize: 25}}>
        <div className="row" style={{display:'flex', flexDirection:'column', justifyContent:'center', height:'100%', gap:"20px"}}>
          <div className="col-md-6" stlye = {{marginBottom: "50px"}}>
            <img 
              src= {product.imgUrl}
              width="300px" 
              height="400px"
            />
          </div>
          <div style = {{width: "700px",display: "flex", flexDirection: "column", justifyContent:'space-around'}}>
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
            <button onClick={backpage} style = {{width: "100%", height:'50px', fontSize:20, marginTop:'50px', marginBottom:'30px'}}>이전 페이지</button> 
            <button onClick={onClickJoinChatRoom}style={{width: "100%", height:'50px', fontSize:20, backgroundColor:'#095580', color:'white'}}>채팅방 이동하기</button> 
          </div>
        </div>
      </div>
      <Footer/>
    </body>
  )
}