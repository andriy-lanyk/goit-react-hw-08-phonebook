import { useSelector, useDispatch } from "react-redux";
import * as contactsActions from '../../Redux/Contacts/contacts-actions'
import { getAllContacts, getFilter } from '../../Redux/Contacts/contacts-selectors'

import { Label, Message } from "./Filter.styles";

const Filter = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

    const handleChange = (e) => {
    dispatch(contactsActions.filterContacts(e.target.value));
  };

  return contacts.length !== 0 ? (
    <Label>
      Find contacts by Name
      <input type="text" name="Find contact" value={filter} onChange={handleChange} />
    </Label>
  ) : (
    <Message>Your Phonebook don`t have contacts</Message>
  );
};

export default Filter;
