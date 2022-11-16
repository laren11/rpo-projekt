
import { textAlign } from '@mui/system';
import React from 'react';
import Noob from './photos/Noob.png';
import Roman from './photos/Roman.png'
  
const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '80vh',
        flexDirection: 'column',
        marginTop: '2vh'
      }}
    >
      <h1>ABOUT THE GAME</h1>
      <h3>Our game is a simple side-scroller game designed for endless hours of fun</h3>
      <div style={{marginTop: '3%'}}>
        <img src={Noob} style={{width: '25vw'}}/>
        <img src={Roman} style={{width: '17vw'}} />
      </div>
    </div>
  );
};
  
export default About;