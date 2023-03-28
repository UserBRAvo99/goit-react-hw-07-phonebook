export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectLoading = state => state.contacts.isLoading;

export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const filterValue = selectFilter(state);

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );
};
