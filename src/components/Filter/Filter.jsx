import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Form } from 'react-bootstrap';

import styles from './Filter.module.scss';

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
            <label className={styles.label} htmlFor={this.filterId}>
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
            </label>
        );
    }
}
export default Filter;
