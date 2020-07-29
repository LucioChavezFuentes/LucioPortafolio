import React from 'react'

// Material IU Icon Warapper
import SvgIcon from '@material-ui/core/SvgIcon';

import { ReactComponent as MexFlag } from './MexicoFlag1.svg'; 

interface Props{
    sizeInPixels?: string
}

function MexicoFlag(props: Props) {

    return (
        <SvgIcon {...props} viewBox="0 0 980 560" style={{fontSize: props.sizeInPixels}} component={MexFlag} />
    )
}

export default MexicoFlag;