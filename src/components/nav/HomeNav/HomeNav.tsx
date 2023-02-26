import { DateTimeWidget } from '../../widgets';
import { Navbar } from '../Navbar/Navbar';
import styles from './HomeNav.module.css';

export const HomeNav = (): JSX.Element => {
  return (
    <Navbar>
      <div className={styles.homeNav}>
        <span>Staffboard v0.1</span>
        <DateTimeWidget />
      </div>
    </Navbar>
  );
};
