import React from 'react'

// Material IU Icon Warapper
import SvgIcon from '@material-ui/core/SvgIcon';

import { ReactComponent as MexFlag } from './MexicoFlag.svg'; 

interface Props{
    sizeInPixels?: string
}

const MexicoFlag: React.FC<Props> = (props: Props) => {

    return (
        <SvgIcon {...props} viewBox="0 0 980 560" style={{fontSize: props.sizeInPixels}} component={MexFlag} />
    )
}

export default MexicoFlag;