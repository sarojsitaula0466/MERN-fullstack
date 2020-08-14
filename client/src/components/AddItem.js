import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
import TextField from "@material-ui/core/TextField";
class AddItem extends Component {
  state = {
    name: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = { name: this.state.name };
    this.props.addItem(newItem);
    e.target.reset();
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="addItem">
          <TextField
            onChange={this.onChange}
            name="name"
            label="Add your items here..."
            fullWidth={true}
          />
        </div>
        <div className="addItem">
          <button
            style={{
              padding: "4px 8px",
              backgroundColor: "#187bcd",
              color: "#fff",
              borderRadius: "5px",
            }}
          >
            Add Item
          </button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  item: state.item,
});
export default connect(mapStateToProps, { addItem })(AddItem);
