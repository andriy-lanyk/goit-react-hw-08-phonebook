import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllContacts } from "../../Redux/Contacts/contacts-selectors";
import * as contactsOperations from "../../Redux/Contacts/contacts-operations";
import { toast } from "react-toastify";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";

import { Form } from "./ContactForm.styles";

const validNamePattern =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const validNumberPattern =
  // /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;

function validateValue(text, pattern) {
  switch (pattern) {
    case validNamePattern:
      return validNamePattern.test(text);
    case validNumberPattern:
      return validNumberPattern.test(text);
    default:
      return;
  }
}

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
      toast.warn(`${name} is already in contacts`, { theme: "colored" });
      reset();
      return;
    }

    if (!validateValue(name, validNamePattern)) {
      toast.warn(
        "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
        { theme: "colored" }
      );
      setName("");
      return;
    }

    if (!validateValue(number, validNumberPattern)) {
      toast.warn(
        "Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +",
        { theme: "colored" }
      );
      setNumber("");
      return;
    }

    dispatch(contactsOperations.fetchAddContacts(name, number));
    toast.success(`${name} was added to phonebook`, {
      theme: "colored",
      autoClose: 2500,
    });
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
        onChange={handleChange}
        size="small"
      />
      <Button type="submit" variant="contained" endIcon={<AddIcCallIcon />}>
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
