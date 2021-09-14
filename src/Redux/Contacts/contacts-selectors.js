import { createSelector } from "reselect";

const getAllContacts = (state) => state.contacts.contactItems.items;
const getFilter = (state) => state.contacts.filter;

const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter))
  }
);

export {getAllContacts, getFilter, getFilteredContacts}

