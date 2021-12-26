import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import styles from './ContactListItem.module.scss';
export default function ContactListItem({ contact, onDelete }) {
    return (
        <li className={styles.item}>
            <p>{contact.name}</p>
            <a href={'tel:' + contact.number}>{contact.number}</a>
            <Button
                variant="outline-dark"
                type="button"
                onClick={() => {
                    onDelete(contact.id);
                }}
            >
                Delete
            </Button>
        </li>
    );
}
ContactListItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
};
