import React, { Component } from "react";
import { connect } from "react-redux";
import { createGrid, createMaze, addWeights } from "../redux/grid/gridActions";
import Grid from "../components/grid/Grid";
import Filter from "../components/filter/Filter";

import { openModal } from "../redux/modal/ModalActions";

import "./Home.scss";

class Home extends Component {
  componentDidMount() {}

  render() {
    const {
      createGrid,
      createMaze,
      enableVisualizeButton,
      addWeight,
      algorithms,
      currentAlg,
      modalOpen,
    } = this.props;

    return (
      <div className="home">
        <div className="top">
          <div>
            <h1 className="title">Pathfinder</h1>
          </div>
          <div className="top-button-container">
            <div>
              <button
                disabled={!enableVisualizeButton}
                className="create-maze"
                onClick={() => {
                  createGrid();
                  createMaze();
                }}
              >
                <span className="squirk" style={{color: "black", paddingRight: "15px", paddingLeft: "15px"}}> PUZZLE </span>
              </button>
            </div>
            
            <div>
              <button
                disabled={!enableVisualizeButton}
                className="clear-board"
                onClick={() => {
                  createGrid();
                }}
              >
                <span className="squirk" style={{color: "black", paddingRight: "15px", paddingLeft: "15px"}}>RESET</span>
              </button>
            </div>
          </div>
        </div>
        <div className="middle"></div>
        <div className="bottom">
          <div style={{ width: "20%", height: "fit-content" }}>
            <div className="filter-container">
              <Filter></Filter>
            </div>
            
          </div>
          <div className="grid-container-parent">
            <div className="grid-container">
              <Grid></Grid>
            </div>
            <div style={{ position: "fixed", right: "0", bottom: "0"}}>
              made by BHAVY

            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  enableVisualizeButton: state.grid.enableVisualizeButton,
  algorithms: state.filter.algorithms,
  currentAlg: state.filter.currentAlg,
});

const mapDispatchToProps = (dispatch) => ({
  createGrid: () => dispatch(createGrid()),
  createMaze: () => dispatch(createMaze()),
  addWeight: () => dispatch(addWeights()),
  modalOpen: (body) => dispatch(openModal(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
