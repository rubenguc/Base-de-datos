import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  toolbarTitle: {
    flex: 1,
    align: 'center'
  }
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar >
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          className={classes.toolbarTitle}
        >
          Sistema de Garantias
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
