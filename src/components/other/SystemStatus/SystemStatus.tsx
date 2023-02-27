import { useState } from 'react';
import { dummyServices } from '../../../data/state';
import { ServiceStatus } from '../../../typescript/enums';
import { Service } from '../../../typescript/interfaces';
import { StatusDot } from '../../ui';
import styles from './SystemStatus.module.css';

export const SystemStatus = (): JSX.Element => {
  const [services, setServices] = useState<Service[]>([...dummyServices]);

  return (
    <div className={styles.cardWrapper}>
      {services.map((s, idx) => (
        <div className={styles.cardRow} key={idx}>
          <h3>{s.name}</h3>
          <StatusDot
            status={
              s.isActive
                ? ServiceStatus.activeStatus
                : ServiceStatus.alertStatus
            }
          />
        </div>
      ))}
    </div>
  );
};
