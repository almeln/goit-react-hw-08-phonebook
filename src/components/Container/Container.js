import React from 'react';
import css from './Container.module.css';
// import Container from 'react-bootstrap/Container'

const Container = ({ children }) => (
  <div className={css.container}>{children}</div>
);

export default Container;
