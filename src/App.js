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
import SelectLabels from './pages/Selectlabel.js';
import Searchbar from './pages/Searchbar.js';
import Searchpage from './pages/Searchpage.js';
import Detail from './pages/Detailpage.js';
// import Card from "./pages/Card.js"

const bookCardInfoSample = {
  mainInfo : {
    img : {
      width : '115.86',
      height : '168',
      src : 'https://img.khan.co.kr/news/2023/04/22/news-p.v1.20230422.8ce451d8c991486698c99a002ecbd65f_P1.jpg'
    },
    infoText : {
      title : '스즈메의 문단속',
      autor : '신카이 마코토',
      price : 1800000,
      date : '2023.04.16'
    }
  },
  detailInfo : {
    department : '아트&디자인 테크놀로지 대학',
    lecture : '디지털 공학',
    professor : '장준혁 교수',
    seller : {
      name : '신현수',
      rating : 10
    }
  }
};

function App() {
  return (
    <Grid container justifyContent = "center" height="100vh" flexDirection="column">
      <Header/>
    {/* <Signin/> */}
    {/* <Signup/> */}
    {/* <Emailauthrequ/> */}
    {/* <Emailauthnum/> */}
    {/* <Album/> */}
      {/* <Boardpage/> */}
      {/* {<BookCard bookCardInfo={bookCardInfoSample} />} */}
      {/* <Footer/> */}
    <Boardpage bookCardInfo={bookCardInfoSample}/>
    {/* <Detail/> */}
    {/* <Searchbar/> */}
    {/* <Grid item><Searchpage/></Grid> */}
    
    <Footer/>
    </Grid>
  );
}

export default App;
