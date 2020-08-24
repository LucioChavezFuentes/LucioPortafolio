import React from 'react'
// Custom Icons
import AdventureCode from "assets/img/customIcons/AdventureCode";
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
            href="https://codigoaventura-2c741.firebaseapp.com"
            target='_blank'
            color='primary'
            rel="noopener noreferrer"
            variant={variant || 'contained'}
            startIcon={<AdventureCode />}
        >
            {label || `Visit App's Page`}
        </Button>
    )
}

export default RavenousLink