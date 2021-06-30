import React from 'react'

// Material IU Icon Warapper
import SvgIcon from '@material-ui/core/SvgIcon';

//Adventure Code
import {ReactComponent as BBBicLinkSVG } from '../projectIcons/bbbic.svg';

interface Props{
    fontSizePixels?: string
}

function BBBic(props: Props) {
    return (
        <SvgIcon {...props} viewBox="0 0 400 389.07103825136613" component={BBBicLinkSVG}  />
    )
}

export default BBBic;