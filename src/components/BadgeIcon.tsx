import React, { ReactNode } from 'react'

import Badge from '@material-ui/core/Badge';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface BadgeContentProps {
    sizeInPixels?: string
}

interface Props {
    badgeContent: React.ComponentType<BadgeContentProps>;
    sizeInPixels?: string;
}

const styles = (theme : Theme) => createStyles({
    iconPosition: {
        top: '11px',
    }
})
const useStyles = makeStyles(styles);

const BadgeIcon:React.FC<Props> = (props) => {
    const {sizeInPixels, children} = props;
    const classes = useStyles();
    return (
        <Badge
            classes={{anchorOriginTopRightRectangle: classes.iconPosition}}
            badgeContent={<props.badgeContent sizeInPixels={sizeInPixels || '10px'} />}>
            {children}
        </Badge>
    )
}

export default BadgeIcon
