import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./Contacts/contacts-reduser";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export { store };
