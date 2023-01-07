import Slider from '@mui/material/Slider';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';


export default function mySlider() {
    const [vol, setVol] = useState(10);

    

}

<Slider

    onChange = {(value) => setPosition(value)}
    aria-label="Volume"
    defaultValue={10}
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