import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as contactsActions from "./contacts-actions";

const InitialState = {
  items: [],
  isLoading: false,
  error: "",
};

const contactItems = createReducer(InitialState, {
  [contactsActions.getContacts]: (state, {payload}) => ({...state, items: [...payload]}),
  [contactsActions.addContact]: (state, { payload }) => ({ ...state, items: [...state.items, payload], }),
  [contactsActions.deleteContact]: (state, { payload }) => ({ ...state, items: state.items.filter((elem) => elem.id !== payload), }),
  [contactsActions.fetchContactsRequest]: state => ({ ...state, isLoading: true, }),
  [contactsActions.fetchContactsSuccess]: state => ({ ...state, isLoading: false, }),
  [contactsActions.fetchContactsError]: (state, {payload}) => ({...state, error: payload,}),
});

const filter = createReducer("", {
  [contactsActions.filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  contactItems,
  filter,
});
