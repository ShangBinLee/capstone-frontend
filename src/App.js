import React from 'react'
import "./App.css"
import Grid from '@mui/material/Grid';
import Signin from './pages/Signin.js'
import Signup from './pages/Signup.js';
import Emailauthrequ from './pages/EmailAuthrequ.js';
import Emailauthnum from './pages/EmailAuthnum.js';
import Footer from './headfoot/footer.js';
import Header from './headfoot/header.js'
import Boardpage from './pages/boardpage.js';
import BookCard from './components/BookCard.js';
import bookCardInfoSample from './pages/bookCardInfoSample.js';
import SelectLabels from './pages/Selectlabel.js';
import Searchbar from './pages/Searchbar.js';
import Searchpage from './pages/Searchpage.js';
import Detail from './pages/Detailpage.js';
import ReactDOM from 'react-dom';
import Mypage from './pages/Mypage';
import MyBuyOrder from './components/MyBuyOrder.js';
import MySaleOrder from './components/MySaleOrder.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Card from "./pages/Card.js"

ReactDOM.render(
    <Router>
      <div className="app-router">
        <Routes>
          <Route exact path="/" element={<Signin/>} />
          <Route exact path="/emailauthrequ" element={<Emailauthrequ/>} />
          <Route path="/emailauthnum" element={<Emailauthnum/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/boardpage" element={<Boardpage bookCardInfo={bookCardInfoSample}/>} />
          <Route path="/detail" element={<Detail/>}/>
          <Route path="/mypage" element={<Mypage/>}/>
          <Route path="/MyBuyOrder" element={<MyBuyOrder orderInfo={{title : "스즈메의 문단속 소설책 팝니다 미지근한 신상",
  saleProductName : "스즈메의 문단속",
  price : 12000,
  orderState : "거래 중",
  date : "2023-06-12"}} />}/>
          <Route path="/MySaleOrder" element={<MySaleOrder orderInfo={{title : "스즈메의 문단속 소설책 팝니다 미지근한 신상",
  saleProductName : "스즈메의 문단속",
  price : 12000,
  orderState : "판매 중",
  date : "2023-06-12"}}/>}/>
        </Routes>
      </div>
    </Router>
  ,
  document.getElementById('root')
);

function App() {
  return (
    <Grid container justifyContent = "center" height="100vh" flexDirection="column">
      
      {/* <Routes>
        <Route exact path="/" element={<Signin/>} />
        <Route exact path="/emailauthrequ" element={<Emailauthrequ/>} />
        <Route path="/emailauthrnum" element={<Emailauthnum/>} />
        <Route path="/boardpage" element={<Boardpage/>} />
      </Routes> */}

      {/* <Header/> */}
      {/* <Routes>
        <Route path="/" element={<Signin/>}/>
      </Routes> */}
    {/* <Signin/> */}
    {/* <Signup/> */}
    {/* <Emailauthrequ/> */}
    {/* <Emailauthnum/> */}
    {/* <Album/> */}
      {/* <Boardpage/> */}
      {/* {<BookCard bookCardInfo={bookCardInfoSample} />} */}
      {/* <Footer/> */}
    {/* <Boardpage bookCardInfo={bookCardInfoSample}/> */}
    {/* <Detail/> */}
    {/* <Searchbar/> */}
    {/* <Grid item><Searchpage/></Grid> */}
    
    {/* <Footer/> */}
    </Grid>
  );
}



export default App;
