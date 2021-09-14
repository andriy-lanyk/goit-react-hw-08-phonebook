import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as contactsOperations from '../../Redux/Contacts/contacts-operations';
import { getAllContacts, getFilteredContacts } from '../../Redux/Contacts/contacts-selectors'
import { Btn, ItemText, Item } from "./ContactListStyles";

const ContactList = () => {
  const contacts = useSelector(getAllContacts);
  const visibleContacts = useSelector(getFilteredContacts)

  const dispatch = useDispatch();

    useEffect(() => {
    dispatch(contactsOperations.fetchGetContacts());
    }, [dispatch]);
  

  return (
    contacts.length > 0 && (
      <ul>
        {visibleContacts.map(({ id, name, number }, i) => (
          <Item key={id}>
            <ItemText>
              {`${i + 1})    `}
              {name}: {number}
            </ItemText>
            <Btn type="button" onClick={() => dispatch(contactsOperations.fetchDeleteContacts(id))}>
              Delete
            </Btn>
          </Item>
        ))}
      </ul>
    )
  );
};

export default ContactList;
