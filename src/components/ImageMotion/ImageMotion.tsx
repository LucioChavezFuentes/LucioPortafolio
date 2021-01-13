import React from 'react'
// @material-ui/core components
import { makeStyles, createStyles, Theme} from "@material-ui/core/styles";
//Types
import StyleProps from "types/StyleProps";
//Helpers
import getDarkOrLightTheme from 'helper/getDarkOrLightTheme';

const styles = (theme: Theme) => createStyles({

  projectImage: {
		width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
		borderRadius: '10px',
		color: (props) => getDarkOrLightTheme(theme, 'text', props as StyleProps),
		textAlign: 'center',
    fontSize: '20px',
    transition: 'all 500ms ease 200ms, opacity 700ms ease 0ms',
	},

	projectThumb: {
		width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
		borderRadius: '10px',
		color: (props) => getDarkOrLightTheme(theme, 'text', props as StyleProps),
		textAlign: 'center',
		fontSize: '20px',
    filter: 'blur(10px)',
    transition: 'visibility 0ms ease 700ms, opacity 700ms ease 0ms',
	},

})

const useStyles = makeStyles(styles)

const Image = (props) => {

  const { isThemeDark, src, thumb, alt, motion, variants } = props;

  const [isLoaded, setLoaded] = React.useState(false);

  const classes = useStyles({isThemeDark})

  return (
    <>
      <motion.img
        className={classes.projectImage}
        variants={variants}
        src={src}
        alt={alt}
        style={{opacity: isLoaded ? 1 : 0}}
        onLoad={() => {
          setLoaded(true)
        }}
        loading='lazy'
        
      />

      <motion.img
        className={classes.projectThumb}
        variants={variants}
        src={thumb}
        alt={alt}
        style={{visibility: isLoaded ? 'hidden' : 'visible', opacity: isLoaded ? 0 : 1 }}
        loading='eager'
      />
    </>
  )
}

export default Image
