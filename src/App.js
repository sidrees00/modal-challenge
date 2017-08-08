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

  handleSaveModal () {
    let inputText = this.state.temp;
    this.setState({ name: inputText, showModal: false });
  }

  render() {
    return (
      <div className="App">
        
        <button onClick={this.handleOpenModal}> TEST </button>
        
        <ReactModal 
           isOpen={this.props.store.showModal}
           contentLabel="Minimal Modal Example"
           style={styles.modal}
        >
          <h3>TEST</h3>

        <form>
          Full Name <input type='text'></input>
        </form>

        <div style={styles.buttonContainer}>
          <button 
            style={styles.modalButton} 
            onClick={this.handleCloseModal}>Cancel
          </button>
          <button 
            style={styles.modalButton} 
            onClick={this.handleSaveModal.bind(this)}>Save
          </button>
        </div>
        
        </ReactModal>
      
      </div>
    );
  }
}

const styles = {
  container: {
    margin: 30
  },
  modal: {
    content: {
      color: 'black',
      height: 250, 
      width: 300,
      borderRadius: 0,
      marginLeft: '27%',
      marginTop: '15%'
    }
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  editButton: {
    height: 40,
    width: 150,
    borderRadius: 0,
    fontSize: 13,
  },
  modalButton: {
    height: 40, 
    width: 200,
    borderRadius: 0,
    marginTop: '40%',
  },
  horizontalRule: {
    marginTop: 20,
    borderColor: 'grey',
    borderWidth: 2
  },
};

export default App;






