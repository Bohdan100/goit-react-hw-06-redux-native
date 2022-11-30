import React from 'react';
import { useSelector } from 'react-redux';

import { ContactsList } from './Contacts.styled';
import { ContactsItem } from './ContactsItem';
import { getContacts, getFilter } from 'redux/selectors';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filterName = useSelector(getFilter);

  const findVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName)
    );
  };

  const visibleContacts = findVisibleContacts();

  return (
    <ContactsList>
      {visibleContacts.length > 0 &&
        visibleContacts.map(({ id, name, number }) => (
          <ContactsItem key={id} id={id} name={name} number={number} />
        ))}
    </ContactsList>
  );
};
