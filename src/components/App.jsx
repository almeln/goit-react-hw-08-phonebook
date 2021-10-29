import React from 'react';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './AppBar';
// import Container from './Container';
import Container from 'react-bootstrap/Container'
import { fetchCurrentUser } from '../redux/auth/auth-operations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import authSelectors from 'redux/auth/auth-selectors';

const HomeView = lazy(() => import('views/HomeView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));

export default function App() {
    const dispatch = useDispatch();
    const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);
  
    useEffect(() => {
      dispatch(fetchCurrentUser());
    }, [dispatch]);
  
    return (
      !isFetchingCurrentUser && (
        <>
        <AppBar />
        <Container>  
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <PublicRoute exact path="/">
              <HomeView/>
            </PublicRoute>
            <PublicRoute exact path="/register" restricted>
              <RegisterView/>
            </PublicRoute>
            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginView/>
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>         
          </Suspense>
        </Switch>
        </Container>
        </>
      )
    );
  };