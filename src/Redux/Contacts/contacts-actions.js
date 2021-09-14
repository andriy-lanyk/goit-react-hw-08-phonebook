import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add", ({ name, number, id }) => {
  return {
    payload: {
      name,
      number,
      id,
    },
  };
});

const getContacts = createAction("contacts/get");
const deleteContact = createAction("contacts/delete");
const filterContacts = createAction("contacts/filter");

const fetchContactsRequest = createAction('contacts/fetchRequest')
const fetchContactsSuccess = createAction('contacts/fetchSuccess')
const fetchContactsError = createAction('contacts/fetchError')

export { addContact, getContacts, deleteContact, filterContacts, fetchContactsRequest, fetchContactsSuccess, fetchContactsError }