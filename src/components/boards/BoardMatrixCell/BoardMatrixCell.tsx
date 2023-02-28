import { MatrixCell } from '../../../typescript/interfaces';
import styles from './BoardMatrixCell.module.css';

interface Props {
  cell: MatrixCell;
}

export const BoardMatrixCell = ({ cell }: Props): JSX.Element => {
  const { name, layout } = cell;
  const [cs, rs, re, ce] = layout.split(',');

  const randomRGB = (): string => {
    const colors = [...Array(3)].map(() => Math.floor(Math.random() * 255));
    return `rgb(${colors.join(',')})`;
  };

  return (
    <div
      style={{
        background: randomRGB(),
        gridArea: `${rs} / ${cs} / ${re + 1} / ${ce + 1}`
      }}
      className={styles.matrixCell}
    >
      {name}
    </div>
  );
};
