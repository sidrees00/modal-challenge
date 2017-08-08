import React, { Component } from 'react';
import logo from './logo.svg';
import ReactModal from 'react-modal';


import { observer } from "mobx-react";

@observer
class App extends Component {
  constructor(){
    super();
    this.state = {
      showModal: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="App">
        
        <button onClick={this.handleOpenModal}> TEST </button>

        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
        <h3>TEST</h3>

        <div>
          <button 
            onClick={this.handleCloseModal}>Cancel
          </button>
          
        </div>
        </ReactModal>
      </div>
    );
  }
}

export default App;
