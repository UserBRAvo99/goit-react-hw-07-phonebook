export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const filterValue = selectFilter(state);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );
};
