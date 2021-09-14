import React from "react";

import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import Filter from "../Filter";
import { Container } from "./App.styles";

const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm      />
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </Container>
  );
}

export default App;
