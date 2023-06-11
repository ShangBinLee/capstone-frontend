import React from 'react';
import LogoutButton from './LogoutButton.js';
import LogoutBox from './Logoutbox.js';
// import { Link, withRouter } from 'react-router-dom';
import { Link} from 'react-router-dom';

const MyPageForm = () => {

      const myPageFormBlockStyles = {
        width: '100%',
        height: '400px',
        borderRadius: '10px',
        backgroundColor: '#ffffff',
        boxShadow: '0px 0px 2px 1px rgba(0, 0, 0, 0.1)',
      };
      
      const lineBlockStyles = {
        width: '100%',
        padding: '0',
        margin: 'auto 0',
      };
      
      const fullLineStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100px',
        borderBottom: '2px solid #dcdcdc',
        padding: '0',
        margin: '0',
      };
      
      const textBoxStyles = {
        marginLeft: '20px',
        fontSize: '30px'
      };
      
      const logoutBoxStyles = {
        marginLeft: 'auto',
      };

    return (
      <table style={myPageFormBlockStyles}>
        <tr style={lineBlockStyles}>
          <td style={fullLineStyles}>
            <div style={textBoxStyles}>
              안녕하세요 <b>nickname</b> 님!
            </div>
            <div style={logoutBoxStyles}>
                <LogoutBox>
                    <LogoutButton />
                </LogoutBox>
            </div>
          </td>
        </tr>
        
        <tr style={lineBlockStyles}>
          <td style={fullLineStyles}>
            <div style={textBoxStyles}>
              <Link relative='path' to="buy/list">구매 내역</Link>
            </div>
          </td>
        </tr>
        <tr style={lineBlockStyles}>
          <td style={fullLineStyles}>
            <div style={textBoxStyles}>
              <Link relative='path' to="sale/list">판매내역</Link>
            </div>
          </td>
        </tr>
        <tr style={lineBlockStyles}>
          <td style={fullLineStyles}>
            <div style={textBoxStyles}>
              <Link to="/chat-room/list">채팅목록</Link>
            </div>
          </td>
        </tr>
      </table>
    );
  };
  
  export default MyPageForm;