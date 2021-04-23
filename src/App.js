import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import mc from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // запись в state из localStorage
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  // запись в localStorage
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = data => {
    const { name, number } = data;
    const { contacts } = this.state;

    if (data.name.length === 0) {
      alert('Введите имя');
    } else if (data.number.length === 0) {
      alert('Введите номер телефона');
    } else if (
      contacts.find(
        contact => contact.name.toLocaleLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${data.name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [
          {
            ...data,
            id: shortid.generate(),
          },
          ...prevState.contacts,
        ],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(filter),
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const { filter } = this.state;

    return (
      <>
        <h1 className={mc.title}>Phonebook</h1>
        <ContactForm onSubmitProp={this.formSubmitHandler} />

        <h2 className={mc.title}>Contacts</h2>
        <ContactList
          contacts={this.getVisibleContacts()}
          onDelete={this.deleteContact}
        >
          <Filter value={filter} filterProp={this.changeFilter} />
        </ContactList>
      </>
    );
  }
}

export default App;

// npm install redux
// - redux - это либа управления состояниями, там хранят коллекции данных, которые нужны глобально
// - при обновлении state все компоненты получают новые пропсы
// - state выносится отдельно
// - не нужно перекидывать state и props, всё хранится в одном месте

// 1. store (хранилище) - обычный js-объект
// - создаём папку src/redux (вся логика приложения будет храниться тут)
// -- redux/store.js -> ...
