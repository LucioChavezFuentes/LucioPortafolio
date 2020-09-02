import React from 'react'

import WanderlustIcon from 'assets/img/customIcons/WanderlustIcon';
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
            href="https://d2su0h4qlqpblz.cloudfront.net/"
            target='_blank'
            color='primary'
            rel="noopener noreferrer"
            variant={variant || 'contained'}
            startIcon={<WanderlustIcon  />  }
        >
            {label || `Visit App's Page`}
        </Button>
    )
}

export default RavenousLink