import React from 'react'

// Material IU Icon Warapper
import SvgIcon from '@material-ui/core/SvgIcon';

import { ReactComponent as usaFlag} from './MexicoFlag.svg';

interface Props{
    sizeInPixels?: string
}

const USAFlag: React.FC<Props> = (props) => {

    return (
        <SvgIcon {...props} style={{fontSize: props.sizeInPixels}} component={usaFlag} />
    )
}

export default USAFlag;