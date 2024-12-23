import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={styles.contact}>
      <p>
        {name}: {number}
      </p>
      <button className={styles.deleteButton} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
