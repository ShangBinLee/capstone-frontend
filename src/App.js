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
// import Card from "./pages/Card.js"

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
    {/* <Boardpage bookCardInfo={bookCardInfoSample}/> */}
    {/* <Detail/> */}
    {/* <Searchbar/> */}
    {/* <Grid item><Searchpage/></Grid> */}
    
    <Footer/>
    </Grid>
  );
}

export default App;
