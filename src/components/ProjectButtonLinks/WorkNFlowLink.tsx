import React from 'react'
// Custom Icons
import WorkNFlow from "assets/img/customIcons/WorkNFlow";
//Custom MUI Components
import Button from "components/CustomButtons/Button";

interface Props {
    className?: string;
    variant?: "text" | "outlined" | "contained";
    label?: any;
}

const WorkNFlowLink : React.FC<Props> = ({className, variant, label} : Props) => {
    return (
        <Button
            className={className}
            href="https://worknflow.com"
            target='_blank'
            color='primary'
            rel="noopener noreferrer"
            variant={variant || 'contained'}
            startIcon={<WorkNFlow />}
        >
            {label || `Visit App's Page`}
        </Button>
    )
}

export default WorkNFlowLink