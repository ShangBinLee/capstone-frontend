import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    const [value] = React.useState('/');

    const handlePageChange = (page) => {
      navigate(page);
    }

      return ( 
      <div>
      <BottomNavigation sx={{
        height:"125px",
        borderTop: "1px solid black",
        margin: "0 auto",
        maxWidth:"1024px"
      }} showLabels value={value}>
        <BottomNavigationAction
          label="Home"
          value="home"
          sx={{maxWidth:"256px", minWidth:"256px", borderRight: "1px solid black" }}
          icon={<HomeRoundedIcon />}
          onClick={() => handlePageChange('/boardpage')}
        />
        <BottomNavigationAction
          label="Chatting"
          value="chatting"
          sx={{maxWidth:"256px", minWidth:"256px", borderRight: "1px solid black"}}
          icon={<ForumRoundedIcon />}
          onClick={() => handlePageChange('/chat-room/list')}
        />
        <BottomNavigationAction
          label="List"
          value="list"
          sx={{maxWidth:"256px", minWidth:"256px", borderRight: "1px solid black"}}
          icon={<ListRoundedIcon />}
          onClick={() => handlePageChange('')}
        />
        <BottomNavigationAction
          label="Mypage"
          value="mypage"
          sx={{maxWidth:"256px", minWidth:"256px"}}
          icon={<AccountCircleRoundedIcon />}
          onClick={() => handlePageChange('/mypage')}
        />
        </BottomNavigation>
        </div>
    );
  }

export default Footer