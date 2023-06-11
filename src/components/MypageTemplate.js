import React from 'react';
import MyPageForm from './MypageForm.js';

const MyPageTemplate = ({ children }) => {
    const myPageTemplateBlockStyles = {
        background: '#f1f1f1',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: "1024px"
      };
      
      const whiteBoxStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        margin: '0',
        width: '100%',
      };
      
  return (
    <div style={myPageTemplateBlockStyles}>
      <div style={whiteBoxStyles}>
        <MyPageForm/>
      </div>
    </div>
  );
};


export default MyPageTemplate;