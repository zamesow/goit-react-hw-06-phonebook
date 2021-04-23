import React from 'react';
import './Contacts.css';

function Contacts({ title, contactsProp }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {contactsProp.map(contact => {
          <li key={contact.id}>{contact.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Contacts;
