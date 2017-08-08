import React, { Component } from 'react';
import logo from './logo.svg';
import ReactModal from 'react-modal';


import { observer } from "mobx-react";

@observer
class App extends Component {
  constructor(){
    super();
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.props.store.showModal = true;
  }
  
  handleCloseModal () {
    this.props.store.showModal = false;
  }

  render() {
    return (
      <div className="App">
        
        <button onClick={this.handleOpenModal}> TEST </button>
        
        <ReactModal 
           isOpen={this.props.store.showModal}
           contentLabel="Minimal Modal Example"
        >
          <h3>TEST</h3>

          <div>
            <button onClick={this.handleCloseModal}>
              Cancel
            </button>
          </div>
        </ReactModal>
      
      </div>
    );
  }
}

export default App;
