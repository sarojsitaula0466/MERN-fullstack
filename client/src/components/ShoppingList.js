import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import PropTypes from "prop-types";
class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  deleteItem = (id) => {
    this.props.deleteItem(id);
  };
  render() {
    const { items } = this.props.item;
    return (
      <div className="shoppingList">
        {items.length > 0 ? (
          items.map(({ name, _id }) => (
            <ListItem key={_id}>
              <ListItemIcon>
                <IconButton
                  edge="end"
                  onClick={this.deleteItem.bind(this, _id)}
                >
                  <DeleteForeverIcon style={{ color: "red" }} />
                </IconButton>
              </ListItemIcon>
              <ListItemText style={{ paddingLeft: "20px" }} primary={name} />
            </ListItem>
          ))
        ) : (
          <h4 style={{ paddingLeft: "28px", color: "red", paddingTop: "15px" }}>
            Currently you do not have any items
          </h4>
        )}
      </div>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
