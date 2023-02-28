import { MatrixCell } from '../../../typescript/interfaces';
import { BoardMatrixCell } from '../BoardMatrixCell/BoardMatrixCell';
import styles from './BoardMatrix.module.css';

export const BoardMatrix = (): JSX.Element => {
  const cells: MatrixCell[] = [
    {
      name: 'lead',
      layout: '1,1,2,2'
    },
    {
      name: 'sweep',
      layout: '1,3,2,4'
    },
    {
      name: 'iol',
      layout: '1,5,2,6'
    },
    {
      name: 'replen',
      layout: '1,7,2,8'
    },
    {
      name: 'instructor',
      layout: '1,9,2,10'
    },
    {
      name: 'hl',
      layout: '3,1,4,6'
    },
    {
      name: 'fl',
      layout: '5,1,6,6'
    },
    {
      name: 'reactive',
      layout: '7,1,8,6'
    },
    {
      name: 'cr',
      layout: '3,7,4,10'
    },
    {
      name: 'fa',
      layout: '5,7,6,10'
    },
    {
      name: 'rh',
      layout: '7,7,8,10'
    },
    {
      name: 'pick',
      layout: '9,1,10,3'
    },
    {
      name: 'pack',
      layout: '9,4,10,6'
    },
    {
      name: 'dock',
      layout: '9,7,10,8'
    },
    {
      name: 'ship',
      layout: '9,9,10,10'
    }
  ];

  return (
    <div className={styles.boardMatrix}>
      {cells.map((c, idx) => (
        <BoardMatrixCell cell={c} key={idx} />
      ))}
    </div>
  );
};
