import React, { useState } from 'react';
import MyPageTemplate from '../components/MypageTemplate.js';
import Header from '../headfoot/header.js';
import Footer from '../headfoot/footer.js'
// import MyPageForm from '../mypcomponents/MypageForm.js';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';


const Mypage = () => {
    return(
        <body>
            <Header/>
            <MyPageTemplate/>
            <Footer/>
        </body>
    )
}

export default Mypage;
