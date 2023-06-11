import React from 'react';

const LogoutBox = ({ children }) => {

    const boxStyles = {
        marginLeft: '20%',
        width: '30%',
    };

  return (
    <div style={boxStyles}>
      {children}
    </div>
  );
};


export default LogoutBox;