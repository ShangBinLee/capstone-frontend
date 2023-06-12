import React, { useEffect, useState } from 'react';
import MyPageTemplate from '../components/MypageTemplate.js';
import Header from '../headfoot/header.js';
import Footer from '../headfoot/footer.js'
import { fetchMyUserInfo } from '../lib/fetch_user.js';


const Mypage = ({rootUrl}) => {
    const [ userName, setUserName ] = useState('');

    useEffect(() => {
      fetchMyUserInfo(rootUrl)
      .then(({userName}) => setUserName(userName));
    });
    return(
        <body>
            <Header/>
            <MyPageTemplate userName={userName}/>
            <Footer/>
        </body>
    )
}

export default Mypage;
