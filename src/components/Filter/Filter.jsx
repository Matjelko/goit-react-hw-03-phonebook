import { Component } from "react";
import './Filter.css'
import PropTypes from 'prop-types';

class Filter extends Component {
    handleNameFilter = (evt) => {
        this.props.onFilterChange(evt.target.value);
    };
    
    render() {
        const { filter } = this.props;
        return (
            <div className="filter__section">
                <p className="filter__paragraph">Find contacts by name</p>
                <input
                    className="filter__input"
                    type="text"
                    name="name"
                    title="title"
                    value={filter}
                    onChange={this.handleNameFilter}
                />
            </div>
        );
    }
}

Filter.propTypes = {
    filter: PropTypes.string,
    handleNameFilter: PropTypes.func
}

export default Filter