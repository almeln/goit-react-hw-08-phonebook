import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from "components/Container";
import { Toaster } from 'react-hot-toast';
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/ContactList";
import { fetchContacts } from 'redux/contacts/contacts-operations';


export default function ContactsView() {
    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchContacts()), [dispatch]);

    return (
        <Container>
            <Toaster/>
            <h1>Phonebook</h1>
            <ContactForm></ContactForm>
            <h2>Contacts</h2>
            <Filter></Filter>
            <ContactList></ContactList>
        </Container>
    )
}