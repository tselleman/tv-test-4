/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import SSlider from './StyledSlider.tsx';
import Grid from '@mui/material/Grid';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
   // fetch('/api/getUsername')
     // .then(res => res.json())
      //.then(user => this.setState({ username: user.username })); <SSlider plc="Top Left" tv="tltv"  ip="10.0.0.121" code="Zremx0rsp4"/>
  }

  render() {
    //[const { username } = this.state;
    return (
      <div>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 2, sm: 4, md: 2 }}>

       
        <Grid item xs={6}>        
        <SSlider plc="Top Left" tv="tltv"/>
        </Grid>

        <Grid item xs={6}>
        <SSlider plc="Top Right" tv="trtv"/>
        </Grid>

        <Grid item xs={6}>
        <SSlider plc="Bottom Left" tv="bltv"/>
        </Grid>

        <Grid item xs={6}>
        <SSlider plc="Bottom Right" tv="brtv"/>
        </Grid>

    </Grid>
      </div>
    );
  }
}
