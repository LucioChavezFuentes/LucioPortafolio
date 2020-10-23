import React from 'react'

// Material IU Icon Warapper
import SvgIcon from '@material-ui/core/SvgIcon';

//Adventure Code
import {ReactComponent as AdventureCodeSVG } from '../projectIcons/adventureCode.svg';

interface Props{
    fontSizePixels?: string
}

function AdventureCode(props: Props) {
    return (
        <SvgIcon {...props} viewBox="0 0 400 390.90909091" component={AdventureCodeSVG}  />
    )
}

export default AdventureCode;