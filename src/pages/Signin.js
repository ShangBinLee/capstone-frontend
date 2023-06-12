import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import axios from 'axios';
import { connect } from '../socket/connect';

const Signin=({rootUrl})=>{
  // const goToPage= () => {
  //   window.location.href = <Emailauthrequ/>;
  // };
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      password
    }

    // 로그인 요청
    axios.post(`${rootUrl}/api/login`, data, {"Content-Type": 'application/json'})
      .then((response) => {
        if(response.status === 200){
        // 홈 페이지로 이동
        // history.push('/');
        const authorizationHeader = response.headers.get('Authorization');
        localStorage.setItem('authorization', authorizationHeader);
        // 소켓 서버 연결
        connect();
          navigate('/boardpage');
        }
      })
      .catch((error) => {
        alert('로그인 중 오류가 발생했습니다:', error);
      });
  };

	return(
		<Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
            Sign in
      </Typography>
			<TextField
        margin="normal"
        label="Email Address" 
        type="email"
        value={email}
        onChange={handleEmailChange}
        required 
        fullWidth
        name="email"
        autoComplete="email"
        autoFocus
        />
      <TextField
        margin="normal"
        label="Password" 
        type="password" 
        value={password}
        onChange={handlePasswordChange}
        required 
        fullWidth
        name="password" 
        autoComplete="current-password"
        />
      <Button type="submit" onClick={handleLoginSubmit} fullWidth variant="contained"
      sx={{mt:3, mb:2, backgroundColor:"#095580"}}>
        로그인 
      </Button>
      <Grid container direction="row">
        <Grid item>
          <Link to="/emailauthrequ">회원가입</Link>
        </Grid>
      </Grid>
      </Box>
		</Container>
	)
}

export default Signin