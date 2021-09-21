import ContactForm from "../../ContactForm";
import ContactList from "../../ContactList";
import Filter from "../../Filter";

import { Container, TitleBig, TitleNormal } from "./PhonebookView.styles";

const PhonebookView = () => {
  return (
    <Container>
      <TitleBig>Phonebook</TitleBig>
      <ContactForm />
      <TitleNormal>Contacts</TitleNormal>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default PhonebookView;
