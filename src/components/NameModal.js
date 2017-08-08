import React, { Component } from 'react';
import ReactModal from 'react-modal';

import { observer } from "mobx-react";


@observer
class NameModal extends Component {
  
  handleModalChange(e){
    this.props.store.temp = e.target.value
  }

  handleCloseModal () {
    this.props.store.showNameModal = false;
  }

  handleSaveModal () {
    let inputText = this.props.store.temp;
    this.props.store.name = inputText;
    this.props.store.showNameModal = false;
  }
        // <h3>Edit {this.props.store.category} </h3>

  render(){
    return (
      <div>
        <ReactModal 
           isOpen={this.props.store.showNameModal}
           contentLabel="Minimal Modal Example"
           style={styles.modal}
        >

          <form>
            Full Name <input type='text' onChange={this.handleModalChange.bind(this)}></input>
          </form>

          <div style={styles.buttonContainer}>
            <button 
              style={styles.modalButton} 
              onClick={this.handleCloseModal.bind(this)}>Cancel
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
};

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

export default NameModal;