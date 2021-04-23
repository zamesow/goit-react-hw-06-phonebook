import React from 'react';
import PropTypes from 'prop-types';
import mc from './ContactList.module.css';

function ContactList({ contacts, onDelete, children }) {
  return (
    <div className={mc.ContactList}>
      {children}
      <ul className={mc.ContactList__form}>
        {contacts.map(({ id, number, name }) => {
          return (
            <li key={id} className={mc.contact}>
              {name}: {number}
              <button
                className={mc.deleteBtn}
                type="button"
                onClick={() => onDelete(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.array.isRequired,
  children: PropTypes.element.isRequired,
};

export default ContactList;
