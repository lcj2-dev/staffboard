import { ReactNode } from 'react';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import styles from './HomeWrapper.module.css';

interface Props {
  children: ReactNode;
}

export const HomeWrapper = ({ children }: Props): JSX.Element => {
  return (
    <ContentWrapper>
      <div className={styles.homeWrapper}>{children}</div>
    </ContentWrapper>
  );
};
