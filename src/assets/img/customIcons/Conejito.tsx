import React from 'react'

// Material IU Icon Warapper
import SvgIcon from '@material-ui/core/SvgIcon';

//Icon
import {ReactComponent as ConejitoSVG } from '../projectIcons/conejito.svg';

interface Props{
    sizeInPixels?: string
}

const Conejito: React.FC<Props> = (props) => {

    return (
        <SvgIcon {...props} style={{color: 'black', fontSize: props.sizeInPixels}} viewBox="0 0 276.541 346.387" component={ConejitoSVG}  />
    )
}

export default Conejito
