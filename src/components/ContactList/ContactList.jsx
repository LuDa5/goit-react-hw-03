import React from 'react';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  if (!contacts || !Array.isArray(contacts) || contacts.length === 0) {
    return <p className={styles.message}>No contacts available</p>;
  }

  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onDelete={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
