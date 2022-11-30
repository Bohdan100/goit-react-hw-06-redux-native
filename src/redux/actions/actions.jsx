export const addContact = text => {
  return {
    type: 'contacts/addContact',
    payload: text,
  };
};

export const removeContact = contactId => {
  return {
    type: 'contacts/removeContact',
    payload: contactId,
  };
};

export const filterContacts = value => {
  return {
    type: 'filter/filterContacts',
    payload: value,
  };
};
