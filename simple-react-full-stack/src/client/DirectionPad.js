import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PanoramaFishEyeSharpIcon from '@mui/icons-material/PanoramaFishEyeSharp';
import { Stack } from '@mui/system';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from "@material-ui/core/Button";

export default function DirectionPad(props){

    function handleOK() {
        fetch(`/api/tv/OK?tv=${props.tv}`).then(res => res.json())
        .then(data => console.log(data));
      }

    function handleUp() {
    fetch(`/api/tv/navUp?tv=${props.tv}`).then(res => res.json())
    .then(data => console.log(data));
    }
    function handleDown() {
    fetch(`/api/tv/navDown?tv=${props.tv}`).then(res => res.json())
    .then(data => console.log(data));
    }
    function handleLeft() {
    fetch(`/api/tv/navLeft?tv=${props.tv}`).then(res => res.json())
    .then(data => console.log(data));
    }
    function handleRight() {
    fetch(`/api/tv/navRight?tv=${props.tv}`).then(res => res.json())
    .then(data => console.log(data));
    }

    function handleBack() {
        fetch(`/api/tv/navBack?tv=${props.tv}`).then(res => res.json())
        .then(data => console.log(data));
        }

    function handleInput() {
        fetch(`/api/tv/Input?tv=${props.tv}`).then(res => res.json())
        .then(data => console.log(data));
        }

    function handlePair() {
        fetch(`/api/tv/pair?tv=${props.tv}`).then(res => res.json())
        .then(data => console.log(data));
        }

    return (
        <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: -1,
          }}>
            <ArrowBackIcon onClick={handleBack}></ArrowBackIcon>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: -1,
                    m: 2,
                }}>
                <KeyboardArrowLeftIcon fontSize='large' onClick={handleLeft}></KeyboardArrowLeftIcon>
                <Stack>
                    <KeyboardArrowUpIcon fontSize='large' onClick={handleUp}></KeyboardArrowUpIcon>
                    <PanoramaFishEyeSharpIcon fontSize='large'  onClick={handleOK}></PanoramaFishEyeSharpIcon>
                    <KeyboardArrowDownIcon fontSize='large' onClick={handleDown}></KeyboardArrowDownIcon>
                </Stack>
                <KeyboardArrowRightIcon fontSize='large' onClick={handleRight}></KeyboardArrowRightIcon>
            </Box>

            <Button onClick={handleInput}>Input</Button>

        </Box>


    );

}