import React from 'react'

// Material IU Icon Warapper
import SvgIcon from '@material-ui/core/SvgIcon';

import { ReactComponent as MexFlag } from './MexicoFlag.svg';

interface Props{
    sizeInPixels?: string
}

const MexicanFlag: React.FC<Props> = (props) => {

    return (
        <SvgIcon {...props} style={{fontSize: props.sizeInPixels}} component={MexFlag} />
    )
}

export default MexicanFlag;