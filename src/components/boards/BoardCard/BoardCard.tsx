import { Link } from 'react-router-dom';
import { ServiceStatus } from '../../../typescript/enums';
import { Board } from '../../../typescript/interfaces';
import { StatusDot } from '../../ui';
import styles from './BoardCard.module.css';

interface Props {
  board: Board;
}

export const BoardCard = ({ board }: Props): JSX.Element => {
  const { name, isActive } = board;

  return (
    <Link to='/board'>
      <div className={styles.cardWrapper}>
        <div className={styles.cardHeader}>
          <h3>{name}</h3>
          <StatusDot
            status={
              isActive
                ? ServiceStatus.activeStatus
                : ServiceStatus.defaultStatus
            }
          />
        </div>

        <p>Active headcount: 10</p>
      </div>
    </Link>
  );
};
