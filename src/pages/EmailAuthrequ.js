import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Emailauthrequ=()=>{

  // const [verificationCode, setVerificationCode] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // const handleVerificationCodeChange = (e) => {
  //   setVerificationCode(e.target.value);
  // };

  const handleEmailSubmit = (e) => {
    const data = {
      email: email
    };

    // e.preventDefault();
    //이메일로 인증번호를 요청하는 API 호출
    if (!email) {
      console.error('이메일을 입력해주세요.');
      return;
    }


    axios.post('http://203.247.40.158:8080/api/email/send/auth', data, {"Content-Type": 'application/json'})
      .then((response) => {
        if(response.status === 200) {
          navigate('/emailauthnum', {state: {email: email}}); //다음 페이지 넘어갈 때 이메일 상태를 전달
        }
      })
      .catch((error) => {
        console.error('이메일 요청 중 오류가 발생했습니다:', error);
      });
  };

	return(
		<Container component="main" maxWidth="sm">
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
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
            }}>
		<TextField 
        id="standard-email-input"
        sx={{mb:"24px"}}
        label="학교 이메일" 
        required 
        fullWidth
        name="email"
        autoComplete="email"
        value={email}
        onChange={handleEmailChange}
        variant="standard"
        autoFocus
        />
      
      <Button onClick={handleEmailSubmit} fullWidth variant="contained"
      sx={{mt:3, mb:2, backgroundColor:"black", height:"48px"}}>
        인증요청
      </Button>
      </Box>
		</Container>
	)
}

export default Emailauthrequ