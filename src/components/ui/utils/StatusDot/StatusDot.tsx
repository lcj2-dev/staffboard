import { ServiceStatus } from '../../../../typescript/enums';
import styles from './StatusDot.module.css';

interface Props {
  status?: ServiceStatus;
}

export const StatusDot = ({
  status = ServiceStatus.defaultStatus
}: Props): JSX.Element => {
  return (
    <div
      className={`${styles.statusDot} ${styles[ServiceStatus[status]]}`}
    ></div>
  );
};
