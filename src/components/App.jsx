import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import AppBar from './AppBar';
// import HomeView from './views/HomeView';
import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import ContactsView from 'views/ContactsView';
import Container from './Container';
import { register, logIn } from '../redux/auth/auth-operations';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export default function App() {
    // const dispatch = useDispatch();
  
    // useEffect(() => {
    //   dispatch(authOperations.fetchCurrentUser());
    // }, [dispatch]);
  
    return (
      <Container>
        <AppBar />
  
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/todos" component={ContactsView} />
        </Switch>
      </Container>
    );
  }

// export default function App() {
//     const dispatch = useDispatch();

//     useEffect(() => dispatch(fetchContacts()), [dispatch]);

//     return (
//         <Container>
//             <Toaster/>
//             <h1>Phonebook</h1>
//             <ContactForm></ContactForm>
//             {/* <ContactForm onSubmit={formSubmitHandler}></ContactForm> */}
//             <h2>Contacts</h2>
//             <Filter></Filter>
//             <ContactList></ContactList>
//         </Container>
//     )
// }