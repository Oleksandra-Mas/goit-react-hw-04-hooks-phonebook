import React, { Component } from 'react';
import shortid from 'shortid';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.scss';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    nameId = shortid.generate();
    numberId = shortid.generate();
    handleInputChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value,
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };
    render() {
        const { name, number } = this.state;
        return (
            <Form className={styles.form} onSubmit={this.handleSubmit}>
                <Form.Label htmlFor={this.nameId}>
                    Name
                    <Form.Control
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.handleInputChange}
                        id={this.nameId}
                    />
                </Form.Label>
                <Form.Label htmlFor={this.numberId}>
                    Number
                    <Form.Control
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={this.handleInputChange}
                        id={this.numberId}
                    />
                </Form.Label>
                <Button variant="outline-dark" type="sumbit">
                    Add contact
                </Button>
            </Form>
        );
    }
}
export default ContactForm;
