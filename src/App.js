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
    // this.handleModalChange = this.handleModalChange.bind(this);
    // this.handleCloseModal = this.handleCloseModal.bind(this);
    // this.handleSaveModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal (i) {
    this.props.store['show' + i + 'Modal'] = true;
  }
  
  handleModalChange(argument , event){
    // console.log(argument, 'argument')
    // console.log(event.target.value, 'event')
    this.props.store['temp' + argument] = event.target.value
  }

  handleCloseModal (i) {
    this.props.store['show' + i + 'Modal'] = false;
  }

  handleSaveModal (i) {
    let inputText = this.props.store['temp' + i];
    this.props.store[i] = inputText;
    this.props.store['show' + i + 'Modal'] = false;
  }

  render() {
    return (
      <div style={styles.container}>
        <h1>Sports Magazine Settings</h1>
        Name
        <h1>{this.props.store.Name}</h1>
        <button onClick={this.handleOpenModal.bind(this,'Name')}> Change Name </button>
        <NameModal 
          store={store}
          handleCloseModal={this.handleCloseModal.bind(this, 'Name')}
          handleModalChange={this.handleModalChange.bind(this, 'Name')}
          handleSaveModal={this.handleSaveModal.bind(this, 'Name')}
         />

        <hr/>

        Address
        <h1>{this.props.store.Address}</h1>
        <button onClick={this.handleOpenModal.bind(this,'Address')}> Change Address </button>
        <AddressModal 
          store={store}
          handleCloseModal={this.handleCloseModal.bind(this, 'Address')}
          handleModalChange={this.handleModalChange.bind(this, 'Address')}
          handleSaveModal={this.handleSaveModal.bind(this, 'Address')}
        />

        <hr/>

        Favorite Teams
        <h1>{this.props.store.Teams}</h1>
        <button onClick={this.handleOpenModal.bind(this,'Teams')}> Edit Teams </button>
        <TeamsModal 
          store={store}
          handleCloseModal={this.handleCloseModal.bind(this, 'Teams')}
          handleModalChange={this.handleModalChange.bind(this, 'Teams')}
          handleSaveModal={this.handleSaveModal.bind(this, 'Teams')} 
        />
        
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






