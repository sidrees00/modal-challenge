import React, { Component } from 'react';
import ReactModal from 'react-modal';

import { observer } from "mobx-react";


@observer
class AddressModal extends Component {
  render(){
    return (
      <div>

        <ReactModal 
           isOpen={this.props.store.showAddressModal}
           contentLabel="Address Modal"
           style={styles.modal}
        >
        <h1 style={{marginTop: 0}}>Change Address</h1>
        <form>
          Line 1: <input type='text' style={styles.inputField} onChange={this.props.handleFirstAddressChange}></input>
          <br />
          Line 2: <input type='text' style={styles.inputField} onChange={this.props.handleSecondAddressChange}></input>
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
      marginTop: '15%'
    }
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputField: {
    height: 25,
    width: 250,
    marginTop: 2,
    marginBottom: 10,
    fontSize: 17,
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
    margin: 4,
    marginTop: '10%',
    fontSize: 15,
    fontWeight: 300,
    color: 'white',
    backgroundColor: '#4285F4',
  },
  horizontalRule: {
    marginTop: 20,
    borderColor: 'grey',
    borderWidth: 2
  },
};

export default AddressModal;