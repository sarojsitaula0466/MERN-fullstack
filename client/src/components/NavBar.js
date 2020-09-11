import React, { Fragment } from "react";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Register from "../components/auth/Register";
import Logout from "../components/auth/Logout";
import LogIn from "../components/auth/LogIn";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({ auth }) => {
  const { isAuthenticated, user } = auth;
  const alreadyLoggedIn = (
    <Fragment>
      <span>
        <strong>{user ? `Welcome ${user.name}` : ""}</strong>
      </span>
      <Logout />
    </Fragment>
  );
  const guestUser = (
    <Fragment>
      <Register />
      <LogIn />
    </Fragment>
  );
  const classes = useStyles();
  return (
    <MuiThemeProvider>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Shopping List
            </Typography>
            {isAuthenticated ? alreadyLoggedIn : guestUser}
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, null)(NavBar);
