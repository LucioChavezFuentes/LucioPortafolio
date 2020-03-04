import React, { ReactNode } from 'react'

import Badge from '@material-ui/core/Badge';

interface BadgeContentProps {
    fontSize: number
}

interface Props {
    badgeContent: React.ComponentType<BadgeContentProps>;
    fontSize: number;
}

const BadgeIcon:React.FC<Props> = (props) => {
    const {fontSize, children} = props;
    return (
        <Badge badgeContent={<props.badgeContent fontSize={fontSize} />}>
            {children}
        </Badge>
    )
}

export default BadgeIcon
