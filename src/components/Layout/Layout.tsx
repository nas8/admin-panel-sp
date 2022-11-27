import React from 'react';
import { Header } from '../Header/Header';
import styles from './styles.module.css';

type Layout = {
  children: JSX.Element;
};

export const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
