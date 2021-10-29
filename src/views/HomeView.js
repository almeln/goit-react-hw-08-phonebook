import React from 'react';
import css from './Views.module.css';

const HomeView = () => (
  <div className={css.container}>
    <h1 className={css.title}>
      Welcome! This app will help you to be up-to-date with the contacts in your phonebook!{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomeView;