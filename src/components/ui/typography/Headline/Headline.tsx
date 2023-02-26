import { ReactNode } from 'react';
import styles from './Headline.module.css';

interface Props {
  text: ReactNode;
  children?: ReactNode;
}

export const Headline = ({ text, children }: Props): JSX.Element => {
  return (
    <div className={styles.headlineContainer}>
      <h1 className={styles.headlineText}>{text}</h1>
      {children}
    </div>
  );
};
