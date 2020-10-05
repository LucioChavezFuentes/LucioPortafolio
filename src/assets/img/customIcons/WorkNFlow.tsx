import React from 'react'
import {ReactComponent as WorkNFlow} from "assets/img/projectIcons/lotus.svg"

// Material IU Icon Warapper
import SvgIcon from '@material-ui/core/SvgIcon';

interface Props{
    fontSizePixels?: string
}

function WorkNFlowIcon(props: Props) {
    return (
        <SvgIcon {...props} viewBox="0 0 100 100" component={WorkNFlow} />
            
        
    )
}

export default WorkNFlowIcon;