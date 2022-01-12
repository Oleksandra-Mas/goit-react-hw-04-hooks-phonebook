import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/';
import styled from 'styled-components';

const List = styled.ul`
    margin-top: 20px;
`;

export default function ContactList({ contacts, onDelete }) {
    return (
        <List>
            {contacts.map(contact => (
                <ContactListItem
                    key={contact.id}
                    contact={contact}
                    onDelete={onDelete}
                />
            ))}
        </List>
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
