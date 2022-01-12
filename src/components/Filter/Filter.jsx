import React, { Component } from 'react';
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

class Filter extends Component {
    static propTypes = {
        filter: PropTypes.string.isRequired,
        title: PropTypes.string,
        onChange: PropTypes.func.isRequired,
    };
    handleFilterChange = event => {
        const { value } = event.target;
        this.props.onChange(value);
    };
    filterId = shortid.generate();
    render() {
        const { filter, title } = this.props;
        return (
            <Label htmlFor={this.filterId}>
                <span>{title}</span>
                <Form.Control
                    type="text"
                    name="filter"
                    required
                    value={filter}
                    onChange={this.handleFilterChange}
                    placeholder="Search..."
                    id={this.filterId}
                />
            </Label>
        );
    }
}
export default Filter;
