import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.root}>
      <Link to="/Posts">Posts</Link>
      <Link to="/Albums">Albums</Link>
      <Link to="/Todos">Todos</Link>
    </header>
  );
};
