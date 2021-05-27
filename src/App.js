import React, { Component } from "react";
import Home from "./pages/Home";
import Modal from "./components/Modal/Modal";
import Tutorial from "./components/tutorial/Tutorial";
import { connect } from "react-redux";
import { openModal } from "./redux/modal/ModalActions";
import "./App.css";

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Home></Home>
        
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  modalOpen: (body) => dispatch(openModal(body)),
});

export default connect(null, mapDispatchToProps)(App);
