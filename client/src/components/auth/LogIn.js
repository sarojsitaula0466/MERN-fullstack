import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import Alert from "@material-ui/lab/Alert";
class LogIn extends Component {
  state = {
    open: false,
    email: "",
    password: "",
    msg: null,
  };

  /*  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
  }; */

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    // If authenticated, close modal
    if (this.state.open) {
      if (isAuthenticated) {
        this.toggle();
      }
    }
  }
  toggle = () => {
    this.props.clearErrors();
    this.setState({ open: !this.state.open });
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    //create user object
    const user = {
      email,
      password,
    };
    //Attempt to login
    this.props.login(user);
  };

  render() {
    return (
      <div>
        <Link
          style={{ textDecoration: "none", color: "#fff", marginLeft: "10px" }}
          href="#"
          onClick={this.toggle}
        >
          Login
        </Link>
        <Modal
          open={this.state.open}
          onClose={this.toggle}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Container
            component="main"
            maxWidth="xs"
            style={{ backgroundColor: "yellow" }}
          >
            <CssBaseline />

            <div
              style={{
                marginTop: "120px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <form
                style={{
                  width: "100%", // Fix IE 11 issue.
                  marginTop: "10px",
                }}
                onSubmit={this.onSubmit}
                noValidate
              >
                {this.state.msg ? (
                  <Alert severity="error">{this.state.msg}</Alert>
                ) : null}

                <TextField
                  onChange={this.onChange}
                  value={this.state.email}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  onChange={this.onChange}
                  value={this.state.password}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ margin: "10px auto" }}
                >
                  Login
                </Button>
              </form>
            </div>
          </Container>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});
export default connect(mapStateToProps, { login, clearErrors })(LogIn);
