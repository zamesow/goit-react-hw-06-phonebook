import React, { Component } from 'react';
import shortid from 'shortid';
import PhoneBookEditor from './components/PhoneBookEditor';
import Contacts from './components/Contacts';

import './App.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = submitName => {
    this.setState(prevState => ({
      contacts: [
        { ...submitName, id: shortid.generate() },
        ...prevState.contacts,
      ],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <PhoneBookEditor onSubmitProp={this.formSubmitHandler} />
        <Contacts title="Contacts" contactsProp={contacts} />
      </>
    );
  }
}

export default App;
