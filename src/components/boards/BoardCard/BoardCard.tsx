import { Board } from '../../../typescript/interfaces';
import { StatusDot } from '../../ui';
import styles from './BoardCard.module.css';

interface Props {
  board: Board;
}

export const BoardCard = ({ board }: Props): JSX.Element => {
  const { name } = board;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardHeader}>
        <h3>{name}</h3>
        <StatusDot />
      </div>

      <p>Active headcount: 10</p>
    </div>
  );
};
