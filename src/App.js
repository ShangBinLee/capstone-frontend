import { rootUrl } from './config.js';
import { React, useEffect } from 'react'
import "./App.css"
import Signin from './pages/Signin.js'
import Signup from './pages/Signup.js';
import Emailauthrequ from './pages/EmailAuthrequ.js';
import Emailauthnum from './pages/EmailAuthnum.js';
import Boardpage from './pages/boardpage.js';
// import Searchpage from './pages/Searchpage.js';
import Detail from './pages/Detailpage.js';
import ReactDOM from 'react-dom';
import Mypage from './pages/Mypage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MySaleOrderList from './components/MySaleOrderList.js';
import MyBuyOrderList from './components/MyBuyOrderList.js'
import ChatRoomList from './components/ChatRoomList.js';
import ChatRoomDetail from './components/ChatRoomDetail.js';
import { socket } from './socket/socket.js';
import { initializeSocket } from './socket/init.js';
import './DB/db.js';

ReactDOM.render(
    <Router>
      <App></App>
    </Router>
  ,
  document.getElementById('root')
);

function App() {
  useEffect(() => {
    if(localStorage.getItem('authorization') !== undefined) {
      initializeSocket(rootUrl);
    }

    return () => socket.disconnect();
  }, []);

  return (
    <div className="app-router">
        <Routes>
          <Route exact path="/" element={<Signin rootUrl={rootUrl}/>} />
          <Route exact path="/emailauthrequ" element={<Emailauthrequ/>} />
          <Route path="/emailauthnum" element={<Emailauthnum/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/boardpage" element={<Boardpage rootUrl={rootUrl}/>} />
          <Route path="/detail/:productId" element={<Detail rootUrl={rootUrl}/>}/>
          <Route path="/mypage" element={<Mypage rootUrl={rootUrl}/>}/>
          <Route path="/mypage/buy/list" element={<MyBuyOrderList rootUrl={rootUrl}/>}/>
          <Route path="/mypage/sale/list" element={<MySaleOrderList rootUrl={rootUrl}/>}/>
          <Route path="/chat-room">
            <Route path="list" relative="path" element={<ChatRoomList rootUrl={rootUrl}/>}/>
            <Route path=":chatRoomId" relative="path" element={<ChatRoomDetail rootUrl={rootUrl}/>}/>
          </Route>
        </Routes>
      </div>
  );
};

export default App;
