import { ReactNode } from 'react';
import styles from './BoardWrapper.module.css';

interface Props {
  children: ReactNode;
}

export const BoardWrapper = ({ children }: Props): JSX.Element => {
  return <div className={styles.boardWrapper}>{children}</div>;
};
