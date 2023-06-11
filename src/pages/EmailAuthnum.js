import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {useLocation, useNavigate} from 'react-router-dom';

const Emailauthnum=()=>{

  const navigate = useNavigate();
  const location = useLocation();
  const [authCode, setauthCode] = useState('');
  const [email, setEmail] = useState('');
  
  useEffect(()=>setEmail(location.state.email));
  

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  const handleauthCodeChange = (e) => {
    setauthCode(e.target.value);
  };

  const handleauthCodeSubmit = (e) => {
    e.preventDefault();
    // const { email } = location.state;
    const data = {
      authCode,
      email
    }


    // 인증 코드를 확인하는 요청을 보냅니다.
    axios
      .post('http://203.247.40.158:8080/api/email/send/auth/check', data, {"Content-Type": 'application/json'})
      .then((response) => {
        // 인증이 성공한 경우, 정보등록 페이지로 이동
        if (response.status === 200) {
          navigate('/signup', {state:{authCode: authCode, email: email}});
        }
        
      })
      .catch((error) => {
        alert('인증 중 오류가 발생했습니다:', error);
      });
  };

	return(
		<Container component="main" maxWidth="sm">
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
      >
        <Typography component="h1" variant="h6" marginBottom="96px" fontSize="24px">
            한남대학교 학교 이메일 인증을 진행합니다.
        </Typography>
      </Box>
      <Box sx={{
              maxWidth:"385px",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: "0 auto"
            }} >
		<TextField
        id="standard-email-input"
        sx={{mb:"24px"}}
        // label="학교 이메일" 
        value={email}
        required 
        fullWidth
        name="email"
        autoComplete="email"
        variant="standard"
        // autoFocus
        disabled
        />
		<TextField 
        id="standard-email-input"
        sx={{mb:"24px"}}
        label="인증 번호" 
        // value={authCode}
        onChange={handleauthCodeChange}
        required 
        fullWidth
        name="number"
        autoComplete="number"
        variant="standard"
        autoFocus
        />
      
      <Button type="submit" onClick={handleauthCodeSubmit} fullWidth variant="contained"
      sx={{mt:3, mb:2, backgroundColor:"black", height:"48px"}}>
        다음
      </Button>
      </Box>
		</Container>
	)
}

export default Emailauthnum