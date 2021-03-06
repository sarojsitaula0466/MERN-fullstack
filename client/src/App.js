import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import ShoppingList from "./components/ShoppingList";
import "./App.css";
import AddItem from "./components/AddItem";
import NavBar from "./components/NavBar";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <AddItem />
          <ShoppingList />
        </div>
      </Provider>
    );
  }
}

export default App;
