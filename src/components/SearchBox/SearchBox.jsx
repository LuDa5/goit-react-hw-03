import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      className={styles.searchBox}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Find contacts by name"
    />
  );
};

export default SearchBox;
