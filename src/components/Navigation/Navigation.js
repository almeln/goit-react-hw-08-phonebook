import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { Nav } from 'react-bootstrap';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  
  return (
    <Nav>
      <NavLink to="/" exact className={css.link} activeClassName={css.activeLink}>
        Home
      </NavLink>
  
      {isLoggedIn && (
        <NavLink
        to="/contacts"
        exact
        className={css.link}
        activeClassName={css.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </Nav>
  );
}

export default Navigation;