/* eslint-disable linebreak-style */
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';
import WifiIcon from '@mui/icons-material/Wifi';
import WifiOff from '@mui/icons-material/WifiOff';
import SyncRoundedIcon from '@mui/icons-material/SyncRounded';
import Modal from '@mui/material/Modal';
import { SyncWindow } from './SyncWindow';
import DirectionPad from './DirectionPad.js';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const WallPaper = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  overflow: 'hidden',
  background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)',
  transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
  '&:before': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    top: '-40%',
    right: '-50%',
    background:
      'radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)',
  },
  '&:after': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    bottom: '-50%',
    left: '-30%',
    background:
      'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
    transform: 'rotate(30deg)',
  },
});

const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(40px)',
}));

const CoverImage = styled('div')({
  width: 100,
  height: 100,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
  },
});

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});


export default function SSlider(props) {
  const theme = useTheme();
  const duration = 200; // seconds
  const [tvvol, setTvVol] = React.useState(10);
  const [paused, setPaused] = React.useState(false);
  const [mute, setMute] = React.useState(false);
  const [connected, setConnected] = React.useState(false);
  const handleToggleMute = () => setMute(current => !current);



  function handlePowerToggle() {
    fetch(`/api/tv/togglepower?tv=${props.tv}`).then(res => res.json())
    .then(data => console.log(data));
  }

  function handleMuteToggle() {
    fetch(`/api/tv/togglemute?tv=${props.tv}`).then(res => res.json())
    .then(data => console.log(data));

  }

  function handlePairing() {
    fetch(`/api/tv/togglemute?tv=${props.tv}`).then(res => res.json())
    .then(data => console.log(data));

  }



  const [modalOpen, setModalOpen] = React.useState(false);

  React.useEffect(() => {
    checkConnected();
    setInterval(checkConnected, 50000);
  }, []);


  async function checkConnected() {
    //not working. Probably need to put this in useeffect or something
    await fetch(`/api/tv/connected?tv=${props.tv}`).then(res => res.json())
    .then((data) => { 
      //need to handle failures. The json will not return correctly. Probably need to check on the API side and just return the Success instead of the results from the T
      if(data.RESULT === "SUCCESS")
      {
        setConnected(true);
      }
      else
      {
        setConnected(false);
        console.log("fail");
      }
    })
    .catch(err => console.log(err));
  }

   const changeVol = (event, newvalue) => {
    console.log(`Before change: ${newvalue}`)
    setTvVol(newvalue);
    console.log(`After change: ${newvalue}`)
    
    fetch(`/api/tv/setvolume?tv=${props.tv}&volume=${newvalue}`).then(res => res.json())
    .then(data => console.log(data));

  }

 
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
    
  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Widget>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: -1,
          }}
        >          
        </Box>
        <div>
         {connected ? <WifiIcon /> : <SyncRoundedIcon  onClick={() => {
          setModalOpen(true);
        }} />}
        </div>
        <div>{props.plc}</div>        

        <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
         
        <IconButton onClick={handleMuteToggle}>
          {mute ? <VolumeOffRoundedIcon /> : <VolumeOffRoundedIcon />}          
        </IconButton>
          <VolumeDownRounded htmlColor={lightIconColor} />
          <Slider
            //onChange = {changeVol}
            onChangeCommitted= {changeVol}
            aria-label="Volume"
            defaultValue={10}
            valueLabelDisplay="auto"
            //value = {this.state.value}
            sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              '& .MuiSlider-track': {
                border: 'none',
              },
              '& .MuiSlider-thumb': {
                width: 24,
                height: 24,
                backgroundColor: '#fff',
                '&:before': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                  boxShadow: 'none',
                },
              },
            }}
          />
          <VolumeUpRounded htmlColor={lightIconColor} />
          <Stack direction="column" alignItems="center">
          <IconButton onClick={handlePowerToggle}>
          <PowerSettingsNewRoundedIcon />
          </IconButton>
          </Stack>
        </Stack>
        <DirectionPad tv={props.tv}></DirectionPad>
      </Widget>
      <WallPaper />
    </Box>
  );
}



