import React from 'react'

// Material IU Icon Warapper
import SvgIcon from '@material-ui/core/SvgIcon';

import {ReactComponent as usaFlag }from './USAFlag1.svg';

interface Props{
    sizeInPixels?: string
}

const USAFlag: React.FC<Props> = (props) => {

    return (
        <SvgIcon {...props} viewBox="0 0 1235 650" style={{fontSize: props.sizeInPixels, color: 'white'}} component={usaFlag} />
    )
}

export default USAFlag;