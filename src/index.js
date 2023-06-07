import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Signin from './pages/Signin.js';
import Emailauthrequ from './pages/EmailAuthrequ.js';
import Emailauthnum from './pages/EmailAuthnum.js';
import Boardpage from './pages/boardpage.js';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.render(
  <Router>
    {/* <App /> */}
    <Routes>
      <Route exact path="/" element={<Signin/>} />
      <Route exact path="/emailauthrequ" element={<Emailauthrequ/>} />
      <Route path="/emailauthrnum" element={<Emailauthnum/>} />
      <Route path="/boardpage" element={<Boardpage/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);