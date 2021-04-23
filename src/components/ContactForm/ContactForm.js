import React, { Component } from 'react';
import mc from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = e => {
    const { value } = e.currentTarget;
    this.setState({ name: value });
  };

  handlePhoneChange = e => {
    const { value } = e.currentTarget;
    this.setState({ number: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmitProp(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={mc.ContactForm}>
        <form className={mc.ContactForm__form} onSubmit={this.handleSubmit}>
          <label className={mc.ContactForm__subtitle}>
            Name
            <input
              className={mc.ContactForm__text}
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <label className={mc.ContactForm__subtitle}>
            Number
            <input
              className={mc.ContactForm__text}
              type="text"
              value={this.state.number}
              onChange={this.handlePhoneChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
