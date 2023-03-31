import { Component } from "react";
import { nanoid } from 'nanoid';
import './ContactForm.css'
import PropTypes from 'prop-types';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };
    
    handleNameChange = (evt) => {
        this.setState({
            name: evt.target.value
        });
    };
    
    handleNumberChange = (evt) => {
        this.setState({
            number: evt.target.value
        });
    };
    
    handleSubmit = (evt) => {
        evt.preventDefault();
        const { name, number } = this.state;
        this.props.onAddContact({ name, number, id: nanoid() });
        this.setState({ 
            name: '', 
            number: ''
        });
    };
    
    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <p className="contactForm__paragraph">Name</p>
                <input
                    className = "contactForm__input"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={this.handleNameChange}
                    />
                <p className="contactForm__paragraph--number">Number</p>
                <input
                    className = "contactForm__input"
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={this.handleNumberChange}
                    />
                <button className="contactForm__button" type="submit">Add Contact</button>
            </form>
        );
    }
}

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    handleNameChange: PropTypes.func,
    handleNumberChange: PropTypes.func,
    handleSubmit: PropTypes.func
}

export default ContactForm