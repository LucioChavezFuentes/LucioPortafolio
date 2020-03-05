import React, { ReactNode } from 'react'

import Badge from '@material-ui/core/Badge';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface BadgeContentProps {
    fontSizePixels: number
}

interface Props {
    badgeContent: React.ComponentType<BadgeContentProps>;
    fontSizePixels: number;
}

const styles = (theme : Theme) => createStyles({
    iconPosition: {
        top: '11px',
    }
})
const useStyles = makeStyles(styles);

const BadgeIcon:React.FC<Props> = (props) => {
    const {fontSizePixels, children} = props;
    const classes = useStyles();
    return (
        <Badge
            classes={{anchorOriginTopRightRectangle: classes.iconPosition}}
            badgeContent={<props.badgeContent fontSizePixels={fontSizePixels} />}>
            {children}
        </Badge>
    )
}

export default BadgeIcon
