import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ButtonAppBar from './navBar';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from './userContex';

export default function HomePage() {
  const { user, setUser } = useContext(UserContext);
  //console.log(user);
  const like = async () => {
    const response = await axios({
      method: 'GET',
      url: '/like'
    });
    if (response.data === 'LN') {
      alert('Please Login First to like');
    } else {
      alert('Liked');
    }
  }

  //to get the current logged in user
  const getData = async () => {
    console.log('sending request');
    const resp = await axios({
      method: 'GET',
      url: '/user/getCuser'
    });
    //console.log(resp.data);
    setUser(resp.data.user);
    console.log(user);
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      {!user ? <ButtonAppBar name = {'login'}/> : <ButtonAppBar name = {user.firstName + " " + user.lastName}/>}
      <br />
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={require('../1.jpg')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={like}><FavoriteBorderIcon color='warning' style={{ fill: 'red' }} /></Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>


  );
}