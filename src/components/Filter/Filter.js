import React from 'react';
import mc from './Filter.module.css';

const Filter = ({ value, filterProp }) => (
  <label className={mc.ContactForm}>
    Find contacts by name
    <input
      className={mc.FeilterForm__text}
      type="text"
      value={value}
      onChange={filterProp}
    />
  </label>
);

export default Filter;
