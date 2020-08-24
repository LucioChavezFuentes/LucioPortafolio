import React from 'react'
// Custom Icons
import Ravenous from "assets/img/customIcons/Ravenous";
//Custom MUI Components
import Button from "components/CustomButtons/Button";

interface Props {
    className?: string;
    variant?: "text" | "outlined" | "contained";
    label?: any;
}

const RavenousLink : React.FC<Props> = ({className, variant, label} : Props) => {
    return (
        <Button
            className={className}
            href="https://ravenous-8b12b.firebaseapp.com"
            target='_blank'
            color='primary'
            rel="noopener noreferrer"
            variant={variant || 'contained'}
            startIcon={<Ravenous />}
        >
            {label || `Visit App's Page`}
        </Button>
    )
}

export default RavenousLink