import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';

const Signup=()=>{

  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [userName, setuserName] = useState('');

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };
  useEffect(()=>setEmail(location.state.email));

  const handleusernameChange = (e) => {
    setuserName(e.target.value);
  };

  const handlepasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleconfirmpasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handlephonenumberChange = (e) => {
    setphoneNumber(e.target.value);
  };

  

  const handleinfoSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      phoneNumber,
      userName
    }

    if(password !== confirmPassword) {
      setPasswordError('패스워드가 일치하지 않습니다');
    } else{
      axios
      .post("http://203.247.40.158:8080/api/join", data, {"Content-Type": 'application/json'})
      .then((response) => {
        if(response.status === 200){
          alert("성공적으로 회원가입이 되었습니다.");
          navigate('/', {state:{email, password, phoneNumber, userName}})
        } else {
          alert("회원가입 중 오류가 발생하였습니다.");
        }
      })
      .catch((error) => {
        alert("회원가입 중 오류가 발생했습니다.");
      })
    }
  }

	return(
		<Container component="main" maxWidth="sm">
      <Box
          sx={{
            maxWidth:"385px",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: "10px",
            margin: "0 auto"
          }}
      >
		<TextField
        sx={{mb:"24px"}}
        label="이름"
        onChange={handleusernameChange}
        required 
        fullWidth
        name="name"
        autoComplete="name"
        autoFocus
        />
      <TextField
        sx={{mb:"24px"}}
        label="비밀번호" 
        onChange={handlepasswordChange}
        type="password" 
        required 
        fullWidth
        name="password" 
        autoComplete="current-password"
        />
        <TextField
        sx={{mb:"24px"}}
        label="비밀번호 재확인" 
        onChange={handleconfirmpasswordChange}
        type="password" 
        required 
        fullWidth
        name="password" 
        autoComplete="current-password"
        />
        <TextField
        sx={{mb:"24px"}}
        label="전화번호" 
        onChange={handlephonenumberChange}
        type="text" 
        required 
        fullWidth
        name="phone number" 
        />
      <Button type="submit" onClick={handleinfoSubmit} fullWidth variant="contained"
      sx={{mt:3, mb:2, backgroundColor:"black", height:"48px"}}>
        회원가입 
      </Button>
      </Box>
		</Container>
	)
}

export default Signup