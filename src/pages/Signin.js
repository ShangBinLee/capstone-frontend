import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
// import Link from '@mui/material/Link';
import { Link, useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Emailauthrequ from './EmailAuthrequ.js';


const Signin=()=>{
  const goToPage= () => {
    window.location.href = <Emailauthrequ/>;
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
        required 
        fullWidth
        name="password" 
        autoComplete="current-password"
        />
      <Button type="submit" fullWidth variant="contained"
      sx={{mt:3, mb:2, backgroundColor:"#095580"}}>
        로그인 
      </Button>
      <Grid container direction="row">
        <Grid item>
          <Link to="/emailauthrequ">회원가입</Link>
          {/* <a href="./EmailAuthrequ.js" onClick={goToPage} style={{ textDecoration: 'none', color: 'inherit' }}>회원가입</a> */}
        </Grid>
      </Grid>
      </Box>
		</Container>
	)
}

export default Signin