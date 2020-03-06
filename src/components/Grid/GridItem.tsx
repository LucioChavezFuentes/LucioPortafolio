import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = createStyles({
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto"
  }
});

const useStyles = makeStyles(styles);

// Usign TypeScript, sometimes you need to use the arrow functions and give them the React.FC<props> type in order to avoid 'false' errors.
// Don't forget to move the export default to its own line
const GridItem:React.FC<any> = (props) => {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridItem.defaultProps = {
  className: ""
};

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};


export default GridItem;