import { Component } from "react";
import Filter from "../Filter/Filter";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import '../../index.css';
import PropTypes from 'prop-types';

class App extends Component{
  state = {
    contacts: [],
    filter: '',
  }

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };
    
  handleAddContact = (contact) => {

    let switching = false;

    this.state.contacts.forEach(el => {
      if(el.name.toLowerCase() === contact.name.toLowerCase()){
        switching = true;
      }
    })
    
    if(switching){
      alert(`${contact.name} is already in contacts.`)
    }
    else{
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id)
    }))
  }

  render(){
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return(
      <div className="container">
        <h1 className="header--phonebook">Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />

        <h2 className="header-contacts">Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={this.handleDeleteContact}/>
      </div>
    )
  };
}

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  handleFilterChange: PropTypes.func,
  handleAddContact: PropTypes.func,
  handleDeleteContact: PropTypes.func
}

export default App;
