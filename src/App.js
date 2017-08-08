import React, { Component } from 'react';
import { observer } from "mobx-react";

import NameModal from './components/NameModal'
import AddressModal from './components/AddressModal';
import TeamsModal from './components/TeamsModal';
import store from './modalStore';

@observer
class App extends Component {
  constructor(){
    super();
  }
  
  handleOpenModal (i) {
    this.props.store['show' + i + 'Modal'] = true;
  }
  
  handleModalChange(argument , event){
    if(argument[0] === 'Address') {
      if(argument[1] === 0){
        this.props.store['temp' + argument[0]][0] = event.target.value
      } else {
        this.props.store['temp' + argument[0]][1] = event.target.value
      }
    } 
    this.props.store['temp' + argument] = event.target.value
  }

  handleCloseModal (i) {
    this.props.store['show' + i + 'Modal'] = false;
  }

  handleSaveModal (i) {
    if(i === "Teams"){
      let inputText = this.props.store['temp' + i];
      if(inputText.length > 1){
        this.props.store[i].push(inputText);
        this.props.store.tempTeams = '';
        this.props.store['show' + i + 'Modal'] = false;
      }
    } else {
      let inputText = this.props.store['temp' + i];
      this.props.store[i] = inputText;
      this.props.store['show' + i + 'Modal'] = false;
    }

  }

  render() {
    let fomattedAddress = <text>{this.props.store.Address[0]} <br /> {this.props.store.Address[1]}</text>,
        format = this.props.store.Teams.map((team, idx) => <li key={idx}>{team}</li>),
        formattedTeams = <ol>{format}</ol>; 
    return (
      <div style={styles.container}>
        <h1>Sports Magazine Settings</h1>
        <h2 style={styles.headings}>Name</h2>
        <h2>{this.props.store.Name}</h2>
        <button 
          onClick={this.handleOpenModal.bind(this,'Name')}
          style={styles.editButton}
        > Change Name 
        </button>
        
        <NameModal 
          store={store}
          handleCloseModal={this.handleCloseModal.bind(this, 'Name')}
          handleModalChange={this.handleModalChange.bind(this, 'Name')}
          handleSaveModal={this.handleSaveModal.bind(this, 'Name')}
         />

        <hr style={styles.horizontalRule}/>

        <h2 style={styles.headings}>Address</h2>
        <h2>{fomattedAddress}</h2>
        <button onClick={this.handleOpenModal.bind(this,'Address')} style={styles.editButton}> Change Address </button>
        <AddressModal 
          store={store}
          handleCloseModal={this.handleCloseModal.bind(this, 'Address')}
          handleFirstAddressChange={this.handleModalChange.bind(this, ['Address',0])}
          handleSecondAddressChange={this.handleModalChange.bind(this, ['Address',1])}
          handleSaveModal={this.handleSaveModal.bind(this, 'Address')}
        />

        <hr style={styles.horizontalRule}/>

        <h2 style={styles.headings}>Favorite Teams</h2>
        <h2>{formattedTeams}</h2>
        <button onClick={this.handleOpenModal.bind(this,'Teams')} style={styles.editButton}> Edit Teams </button>
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
  headings: {
    fontWeight: 300,
    fontSize: 30
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
    fontSize: 15,
    fontWeight: 300,
    color: 'white',
    backgroundColor: '#4285F4',
    borderColor: 'black'
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






