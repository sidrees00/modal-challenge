import React, { Component } from 'react';
import ReactModal from 'react-modal';

import { observer } from "mobx-react";


@observer
class NameModal extends Component {
  render(){
    return (
      <div>
        <ReactModal 
           isOpen={this.props.store.showNameModal}
           contentLabel="Name Modal"
           style={styles.modal}
        >
          <h1 style={{marginTop: 0}}>Change Name</h1>

          <form>
            Full Name <input style={styles.inputField} type='text' onChange={this.props.handleModalChange}></input>
          </form>

          <div style={styles.buttonContainer}>
            <button 
              style={styles.modalButton} 
              onClick={this.props.handleCloseModal}>Cancel
            </button>
            <button 
              style={styles.modalButton} 
              onClick={this.props.handleSaveModal}>Save
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
      marginTop: '15%',
      fontSize: 17,
      fontWeight: 300,
    }
  },
  inputField: {
    height: 25,
    width: 250,
    marginTop: 2,
    marginBottom: 10,
    fontSize: 17,

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
    margin: 4,
    width: 200,
    borderRadius: 0,
    marginTop: '30%',
    fontSize: 15,
    fontWeight: 300,
    color: 'white',
    backgroundColor: '#4285F4',
    borderColor: 'black'
  },
  horizontalRule: {
    marginTop: 20,
    borderColor: 'grey',
    borderWidth: 2
  },
};

export default NameModal;