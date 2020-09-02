import React from 'react'
// Custom Icons
import {ReactComponent as WanderlustSVG} from "assets/img/logos/wanderlust-logo.svg";
// Material IU Icon Warapper
import SvgIcon from '@material-ui/core/SvgIcon';

const WanderlustIcon = (props) => <SvgIcon viewBox='0 0 39 41' component={WanderlustSVG} {...props} />

export default WanderlustIcon;