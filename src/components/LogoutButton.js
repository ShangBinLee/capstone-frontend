import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    //로그아웃 처리 함수 추가
    const navigate = useNavigate();

    const handleLogout = () =>{
        /// 로그아웃 처리 로직 작성
        // 예를 들어, 로컬 스토리지에서 토큰 제거 등
        localStorage.removeItem('authorization');

        // 로그아웃 후 홈페이지로 이동
        navigate('/');
        
    }
    return(
        <Button 
        type="submit"
        onClick={handleLogout}
        sx={{width:"100px", 
            margin:"0 50px 0 0",
            height:"70px", 
            color:"white", 
            backgroundColor:"black", 
            borderRadius:"4px", 
            border:"none", 
            fontSize:"20px"}}>
            Logout
        </Button>
    )
}

export default LogoutButton;