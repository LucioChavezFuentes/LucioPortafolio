import React from 'react'

// Material IU Icon Warapper
import SvgIcon from '@material-ui/core/SvgIcon';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface Props{
    sizeInPixels?: string;
    isMobile?: boolean;
}

const styles = (theme:Theme) => createStyles({
    root: {
        //Try no to force the color on icon and text, use "inherint" instead as first resource
        color: (props: Props) => props.isMobile ? theme.palette.text.primary : 'inherint',
        fontSize: (props:Props) => props.sizeInPixels,
        transition: 'unset'
    }

})

const useStyles = makeStyles(styles)


const ExternalLink:React.FC<Props> = (props) => {

    const classes = useStyles(props);
    return (
        <SvgIcon {...props} className={classes.root}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M488.727 0H302.545c-12.853 0-23.273 10.42-23.273 23.273s10.42 23.273 23.273 23.273h129.997L192.999 286.09c-9.087 9.087-9.087 23.823 0 32.912 4.543 4.543 10.499 6.816 16.455 6.816 5.956 0 11.913-2.273 16.455-6.817L465.455 79.458v129.997c0 12.853 10.42 23.273 23.273 23.273s23.273-10.42 23.273-23.273V23.273C512 10.42 501.58 0 488.727 0z"/>
                <path d="M395.636 232.727c-12.853 0-23.273 10.42-23.273 23.273v209.455H46.545V139.636H256c12.853 0 23.273-10.42 23.273-23.273S268.853 93.091 256 93.091H23.273C10.42 93.091 0 103.511 0 116.364v372.364C0 501.58 10.42 512 23.273 512h372.364c12.853 0 23.273-10.42 23.273-23.273V256c-.001-12.853-10.421-23.273-23.274-23.273z"/>
            </svg>
        </SvgIcon>
    )
}

export default ExternalLink;