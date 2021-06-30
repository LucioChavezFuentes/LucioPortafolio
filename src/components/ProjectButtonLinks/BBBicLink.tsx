import React from 'react'
// Custom Icons
import BBBic from "assets/img/customIcons/BBBic";
//Custom MUI Components
import Button from "components/CustomButtons/Button";

interface Props {
    className?: string;
    variant?: "text" | "outlined" | "contained";
    label?: any;
}

const BBBicLink : React.FC<Props> = ({className, variant, label} : Props) => {
    return (
        <Button
            className={className}
            href="https://elastic-montalcini-1b05f7.netlify.app/"
            target='_blank'
            color='primary'
            rel="noopener noreferrer"
            variant={variant || 'contained'}
            startIcon={<BBBic />}
        >
            {label || `Visit App's Page`}
        </Button>
    )
}

export default BBBicLink