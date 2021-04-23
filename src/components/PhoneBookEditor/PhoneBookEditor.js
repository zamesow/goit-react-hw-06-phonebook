import React, { Component } from 'react';
import './PhoneBookEditor.css';

class PhoneBookEditor extends Component {
  state = {
    name: '',
  };

  handleInputChange = e => {
    const { value } = e.currentTarget;
    this.setState({ name: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmitProp(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <div className="PhoneBookEditor">
        <h1 className="PhoneBookEditor__title">Phonebook</h1>
        <form className="PhoneBookEditor__form" onSubmit={this.handleSubmit}>
          <label className="PhoneBookEditor__subtitle">
            Name
            <input
              className="PhoneBookEditor__text"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default PhoneBookEditor;
