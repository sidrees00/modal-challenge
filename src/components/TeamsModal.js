import React, { Component } from 'react';
import ReactModal from 'react-modal';

import { observer } from "mobx-react";


@observer
class TeamsModal extends Component {
  constructor(props){
    super(props)
  }
  addTeam(){
    let temp = this.props.store.tempTeams;
    this.props.store.Teams.push(temp);
    this.props.store.tempTeams = '';
  }

  render(){
    

    return (
      <div>

        <ReactModal 
           isOpen={this.props.store.showTeamsModal}
           contentLabel="Teams Modal"
           style={styles.modal}
        >

        <h2>Add Teams</h2>
        <form>
            Team 1 <input type='text' value={this.props.store.tempTeams} onChange={this.props.handleModalChange} style={styles.inputField}></input>
          </form>
         


        <text style={{cursor: 'pointer', color: 'blue'}}
         onClick={this.addTeam.bind(this)}>+ Add another team</text>

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
  inputField: {
    height: 25,
    width: 250,
    marginTop: 2,
    marginBottom: 10,
    fontSize: 17,

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
    margin: 4,
    borderRadius: 0,
    marginTop: '20%',
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

export default TeamsModal;