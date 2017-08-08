import React, { Component } from 'react';
import ReactModal from 'react-modal';
import NameModal from './components/NameModal'
import AddressModal from './components/AddressModal';
import TeamsModal from './components/TeamsModal';


import store from './modalStore';
import { observer } from "mobx-react";

@observer
class App extends Component {
  constructor(){
    super();
    // this.handleOpenModal = this.handleOpenModal.bind(this);
    // this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal (i) {
    console.log(typeof i)
    this.props.store[i] = true;
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
      <div style={styles.container}>
        Name
        <h1>{this.props.store.name}</h1>
        <button onClick={this.handleOpenModal.bind(this,'showNameModal')}> Change Name </button>
        <NameModal store={store} />

        <hr/>

        Address
        <h1>{this.props.store.address}</h1>
        <button onClick={this.handleOpenModal.bind(this,'showAddressModal')}> Change Address </button>
        <AddressModal store={store} />

        <hr/>

        Favorite Teams
        <h1>{this.props.store.teams}</h1>
        <button onClick={this.handleOpenModal.bind(this,'showTeamsModal')}> Edit Teams </button>
        <TeamsModal store={store} />
        
      
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






