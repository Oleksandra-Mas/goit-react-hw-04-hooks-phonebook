import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';

const Label = styled.label`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
`;

export default function Filter({ filter, title, onChange }) {
    const handleFilterChange = event => {
        const { value } = event.target;
        onChange(value);
    };

    const filterId = shortid.generate();
    return (
        <Label htmlFor={filterId}>
            <span>{title}</span>
            <Form.Control
                type="text"
                name="filter"
                required
                value={filter}
                onChange={handleFilterChange}
                placeholder="Search..."
                id={filterId}
            />
        </Label>
    );
}
Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    title: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};
