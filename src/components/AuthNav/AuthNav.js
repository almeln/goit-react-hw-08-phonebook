import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={css.link}
        activeClassName={css.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={css.link}
        activeClassName={css.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
}