import { ReactNode } from 'react';
import styles from './Navbar.module.css';

interface Props {
  children?: ReactNode;
}

export const Navbar = ({ children }: Props): JSX.Element => {
  return <nav className={styles.navbar}>{children}</nav>;
};
