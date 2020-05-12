import React from 'react'

import Badge from '@material-ui/core/Badge';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface BadgeContentProps {
    sizeInPixels?: string
}

interface Props {
    icon: React.ComponentType<BadgeContentProps>;
    sizeInPixels?: string;
    fullWidth?: boolean;
    rightPositionInPixels?: number;
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
    const {sizeInPixels, children} = props;
    const classes = useStyles(props);
    return (
        <Badge
            classes={{anchorOriginTopRightRectangle: classes.iconPosition}}
            badgeContent={<props.icon sizeInPixels={sizeInPixels || '10px'} />}
            className={classes.additionalStyle}
        >
            {children}
        </Badge>
    )
}

export default BadgeIcon
