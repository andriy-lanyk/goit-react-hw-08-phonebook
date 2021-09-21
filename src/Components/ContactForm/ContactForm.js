import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllContacts } from "../../Redux/Contacts/contacts-selectors";
import * as contactsOperations from "../../Redux/Contacts/contacts-operations";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";

import { Form } from "./ContactForm.styles";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(getAllContacts);

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

    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      reset();
      return;
    }

    dispatch(contactsOperations.fetchAddContacts(name, number));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        margin="normal"
        label="Name"
        type="text"
        name="name"
        value={name}
        required
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange={handleChange}
        size="small"
      />

      <TextField
        fullWidth
        margin="normal"
        label="Number"
        type="tel"
        name="number"
        value={number}
        required
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        onChange={handleChange}
        size="small"
        inputProps={{
          inputMode: "numeric",
          pattern:
            "+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",
        }}
      />
      <Button type="submit" variant="contained" endIcon={<AddIcCallIcon />}>
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
