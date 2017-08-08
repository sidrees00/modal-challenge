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

        Add Teams
        <form>
            Team 1 <input type='text' value={this.props.store.tempTeams} onChange={this.props.handleModalChange}></input>
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