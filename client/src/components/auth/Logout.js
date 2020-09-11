import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";
import Link from "@material-ui/core/Link";
export class Logout extends Component {
  render() {
    return (
      <Fragment>
        <Link
          style={{ textDecoration: "none", color: "#fff", marginLeft: "10px" }}
          href="#"
          onClick={this.props.logout}
        >
          Logout
        </Link>
      </Fragment>
    );
  }
}

export default connect(null, { logout })(Logout);
