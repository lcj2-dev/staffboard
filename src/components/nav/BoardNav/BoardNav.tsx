import { Link } from 'react-router-dom';
import { DateTimeWidget } from '../../widgets';
import { Navbar } from '../Navbar/Navbar';
import styles from './BoardNav.module.css';

interface Props {
  boardName: string;
}

export const BoardNav = ({ boardName }: Props): JSX.Element => {
  return (
    <Navbar>
      <Link to='/' className={styles.boardName}>
        {boardName} Board
      </Link>
      <DateTimeWidget />
      <span>Actions placeholder</span>
    </Navbar>
  );
};
