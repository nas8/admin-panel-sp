import React from 'react';
import { Header } from '../Header/Header';
import styles from './styles.module.css';

type Props = {
  children: JSX.Element;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <div>{children}</div>
      {/* <footer>footer</footer> */}
    </div>
  );
};
