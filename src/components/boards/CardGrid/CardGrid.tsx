import { ReactNode } from 'react';
import styles from './CardGrid.module.css';

interface Props {
  children: ReactNode;
}

export const CardGrid = ({ children }: Props): JSX.Element => {
  return <div className={styles.cardGrid}>{children}</div>;
};
