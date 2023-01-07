import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';

export class SyncWindow extends React.Component {
    constructor(props) {
        super(props);

        this.TvName = this.TvName.bind(this);
        this.state = {
             open:true

           };
        }

render(){
    return(

        <><div> Test Modal Componet </div><div> {this.TvName}</div></>
    );
}




    }