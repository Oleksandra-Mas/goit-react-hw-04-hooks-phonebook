import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  flex-direction: column;
`;

export default function ContactListItem({ contact, onDelete }) {
    return (
        <Item>
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
        </Item>
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
