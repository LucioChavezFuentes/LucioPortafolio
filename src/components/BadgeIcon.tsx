import React from 'react'

import Badge from '@material-ui/core/Badge';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface BadgeContentProps {
    sizeInPixels?: string;
    isMobile?: boolean;
}

interface Props {
    icon: React.ComponentType<BadgeContentProps>;
    sizeInPixels?: string;
    fullWidth?: boolean;
    rightPositionInPixels?: number;
    isMobile?: boolean;
    id?: string;
}

const styles = (theme : Theme) => createStyles({
    iconPosition: {
        top: '11px',
        right: (props:Props) => props.rightPositionInPixels ? `${props.rightPositionInPixels}px` : '0',
    },

    additionalStyle: {
        width: (props:Props) => props.fullWidth ? '100%' : 'auto'
    }
})
const useStyles = makeStyles(styles);

const BadgeIcon:React.FC<Props> = (props) => {
    const {sizeInPixels, children, isMobile, ...rest} = props;
    const classes = useStyles(props);
    return (
        <Badge
            classes={{anchorOriginTopRightRectangle: classes.iconPosition}}
            badgeContent={<props.icon sizeInPixels={sizeInPixels || '10px'}  isMobile={isMobile} />}
            className={classes.additionalStyle}
            {...rest}
        >
            {children}
        </Badge>
    )
}

export default BadgeIcon
