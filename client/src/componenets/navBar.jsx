import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { UserContext } from './userContex';

export default function ButtonAppBar(props){
  const navigate = useNavigate();
  //console.log(props);
  const { user, setUser } = useContext(UserContext); 
  //console.log('printed from navbar');
  console.log('user from navbar', user);
  const handleClick = ()=>{
    if(props.name === 'login'){
      navigate('/login');
    }
    else{
      navigate('/profile/' + user._id);
    }
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <Button color="inherit"  onClick={handleClick}><AccountCircleIcon/>{props.name}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
