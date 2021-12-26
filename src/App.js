import { Component } from "react";
import shortid from "shortid";
import "bootstrap/dist/css/bootstrap.css";
import { Alert } from "react-bootstrap";

import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter/";
import apiLS from "./helpers/LocalStorage";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = apiLS.getFromList();
    this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      apiLS.addToList(contacts);
    }
  }

  addContact = (data) => {
    this.checkUniqueName(data.name) === -1
      ? this.setState((prevState) => ({
          contacts: [
            ...prevState.contacts,
            { id: shortid.generate(), ...data },
          ],
        }))
      : alert(`${data.name} is already in contacts`);
  };
  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts].filter((contact) => contact.id !== id),
    }));
  };

  changeFilter = (data) => {
    this.setState({ filter: data.toLowerCase() });
  };

  checkUniqueName = (name) => {
    const { contacts } = this.state;
    return contacts.findIndex((contact) => contact.name === name);
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          title={"Find contacts by name"}
          filter={filter}
          onChange={this.changeFilter}
        />
        {filteredContacts.length ? (
          <ContactList
            contacts={filteredContacts}
            onDelete={this.deleteContact}
          />
        ) : (
          <Alert className="Alert" variant="dark">
            Nothing found
          </Alert>
        )}
      </div>
    );
  }
}
