import React from 'react'
// Custom Icons
import Conejito from "assets/img/customIcons/Conejito";
//Custom MUI Components
import Button from "components/CustomButtons/Button";

interface Props {
    className?: string;
    variant?: "text" | "outlined" | "contained";
    label?: string;
}

const SocialConejitoLink : React.FC<Props> = ({className, variant, label} : Props) => {
    return (
        <Button
            className={className}
            href="https://thesocialmono.firebaseapp.com"
            target='_blank'
            color='primary'
            rel="noopener noreferrer"
            variant={variant || 'contained'}
            startIcon={<Conejito />}
        >
            {label || `Visit App's Page`}
        </Button>
    )
}

export default SocialConejitoLink
