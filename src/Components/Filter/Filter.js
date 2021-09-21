import { useSelector, useDispatch } from "react-redux";
import * as contactsActions from "../../Redux/Contacts/contacts-actions";
import {
  getAllContacts,
  getFilter,
} from "../../Redux/Contacts/contacts-selectors";

import TextField from "@material-ui/core/TextField";
import { Message } from "./Filter.styles";

const Filter = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(contactsActions.changeFilter(e.target.value));
  };

  return contacts.length !== 0 ? (
    <TextField
      margin="normal"
      size="small"
      label="Find contacts by Name"
      type="text"
      name="Find contact"
      value={filter}
      onChange={handleChange}
    />
  ) : (
    <Message>Your Phonebook don`t have contacts</Message>
  );
};

export default Filter;
