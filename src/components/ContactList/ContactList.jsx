import PropTypes from 'prop-types';
import styles from './ContactList.module.scss';
import ContactListItem from '../ContactListItem/';

export default function ContactList({ contacts, onDelete }) {
    return (
        <ul className={styles.contact_list}>
            {contacts.map(contact => (
                <ContactListItem
                    key={contact.id}
                    contact={contact}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};
