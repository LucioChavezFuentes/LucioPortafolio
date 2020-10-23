import React from 'react'

// Material IU Icon Warapper
import SvgIcon from '@material-ui/core/SvgIcon';

// Ravenous Svg
import {ReactComponent as RavenousSVG } from '../projectIcons/ravenous.svg'

interface Props{
  fontSizePixels?: string
}

function Ravenous(props:Props) {
    return (
        <SvgIcon {...props} component={RavenousSVG} viewBox="0 0 402 404" />
    )
}

export default Ravenous;