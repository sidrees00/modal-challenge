import React, { Component } from 'react';
import ReactModal from 'react-modal';

import { observer } from "mobx-react";


@observer
class TeamsModal extends Component {
  render(){
    return (
      <div>

        <ReactModal 
           isOpen={this.props.store.showTeamsModal}
           contentLabel="Minimal Modal Example"
           style={styles.modal}
        >

        <form>
         Edit Teams <input type='text' onChange={this.props.handleModalChange}></input>
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

export default TeamsModal;