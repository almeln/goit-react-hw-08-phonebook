import React from 'react';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from './AppBar';
// import HomeView from 'views/HomeView';
// import RegisterView from 'views/RegisterView';
// import LoginView from 'views/LoginView';
// import ContactsView from 'views/ContactsView';
import Container from './Container';
import { fetchCurrentUser } from '../redux/auth/auth-operations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomeView = lazy(() => import('views/HomeView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));
// const UploadView = lazy(() => import('views/UploadView'));

export default function App() {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchCurrentUser());
    }, [dispatch]);
  
    return (
      <Container>
        <AppBar />
  
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <PublicRoute exact path="/">
              <HomeView/>
            </PublicRoute>
            <PublicRoute exact path="/register" restricted>
              <RegisterView/>
            </PublicRoute>
            <PublicRoute exact path="/login" restricted redirectTo="/contacts">
              <LoginView/>
            </PublicRoute>
            {/* <Route exact path="/" component={HomeView} /> */}
            {/* <Route path="/register" component={RegisterView} /> */}
            {/* <Route path="/login" component={LoginView} /> */}
            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>         
            {/* <Route path="/contacts" component={ContactsView} /> */}
          </Suspense>
        </Switch>
      </Container>
    );
  };