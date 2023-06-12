import { rootUrl } from './config.js';
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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MySaleOrderList from './components/MySaleOrderList.js';
import MyBuyOrderList from './components/MyBuyOrderList.js'
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
          <Route path="/mypage/buy/list" element={<MyBuyOrderList rootUrl={rootUrl}/>}/>
          <Route path="/mypage/sale/list" element={<MySaleOrderList rootUrl={rootUrl}/>}/>
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
