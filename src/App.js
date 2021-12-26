import { useEffect, useRef, useState } from 'react';
import shortid from 'shortid';
import 'bootstrap/dist/css/bootstrap.css';
import { Alert } from 'react-bootstrap';

import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter/';
import apiLS from './helpers/LocalStorage';

export default function App() {
    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState('');
    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            const contacts = apiLS.getFromList();
            setContacts(contacts);
            firstRender.current = false;
            return;
        }
        apiLS.addToList(contacts);
    }, [contacts]);

    const addContact = data => {
        checkUniqueName(data.name) === -1
            ? setContacts(prevCont => [
                  ...prevCont,
                  { id: shortid.generate(), ...data },
              ])
            : alert(`${data.name} is already in contacts`);
    };

    const deleteContact = id => {
        setContacts(prevContacts =>
            [...prevContacts].filter(contact => contact.id !== id),
        );
    };

    const changeFilter = data => {
        setFilter(data.toLowerCase());
    };

    const checkUniqueName = name => {
        return contacts.findIndex(contact => contact.name === name);
    };

    const getFilteredContacts = () => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter),
        );
    };

    const filteredContacts = getFilteredContacts();

    return (
        <div className="App">
            <h1>Phonebook</h1>
            <ContactForm onSubmit={addContact} />
            <h2>Contacts</h2>
            <Filter
                title={'Find contacts by name'}
                filter={filter}
                onChange={changeFilter}
            />
            {filteredContacts.length ? (
                <ContactList
                    contacts={filteredContacts}
                    onDelete={deleteContact}
                />
            ) : (
                <Alert className="Alert" variant="dark">
                    Nothing found
                </Alert>
            )}
        </div>
    );
}
