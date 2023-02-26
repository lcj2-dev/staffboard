import { ReactNode } from 'react';
import styles from './ContentWrapper.module.css';

interface Props {
  children?: ReactNode;
}

export const ContentWrapper = ({ children }: Props): JSX.Element => {
  return <main className={styles.contentWrapper}>{children}</main>;
};
