import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as contactsOperations from '../../Redux/Contacts/contacts-operations'

import { Form, Label, Btn } from "./ContactForm.styles";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state.contacts.contactItems.items);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      reset();
      return;
    }

    dispatch(contactsOperations.fetchPostContacts({ name, number }));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          value={name}
        />
      </Label>
      <Label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>
      <Btn type="submit">Add contact</Btn>
    </Form>
  );
}

export default ContactForm;
