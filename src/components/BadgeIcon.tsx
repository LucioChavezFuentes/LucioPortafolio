import React, { ReactNode } from 'react'

import Badge from '@material-ui/core/Badge';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface BadgeContentProps {
    sizeInPixels?: string
}

interface Props {
    badgeContent: React.ComponentType<BadgeContentProps>;
    sizeInPixels?: string;
    fullWidth?: boolean;
}

const styles = (theme : Theme) => createStyles({
    iconPosition: {
        top: '11px',
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
            badgeContent={<props.badgeContent sizeInPixels={sizeInPixels || '10px'} />}
            className={classes.additionalStyle}
        >
            {children}
        </Badge>
    )
}

export default BadgeIcon
