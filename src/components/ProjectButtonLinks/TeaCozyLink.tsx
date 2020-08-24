import React from 'react'
// Custom Icons
import TeaCozy from "assets/img/customIcons/TeaCozy";
//Custom MUI Components
import Button from "components/CustomButtons/Button";

interface Props {
    className?: string;
    variant?: "text" | "outlined" | "contained";
    label?: string;
}

const RavenousLink : React.FC<Props> = ({className, variant, label} : Props) => {
    return (
        <Button
            className={className}
            href="https://tea-cozy-37cbf.firebaseapp.com"
            target='_blank'
            color='primary'
            rel="noopener noreferrer"
            variant={variant || 'contained'}
            startIcon={<TeaCozy />}
        >
            {label || `Visit App's Page`}
        </Button>
    )
}

export default RavenousLink