import { Line } from "./line";
import styles from './styles.module.scss';

export const Chart = () => {
  const arrLines = [1,2,3,4,5,6];
  return (
    <div className={styles.chart}>
      <ul className={styles.chart__lines}>
        {arrLines.map(line => (
          <Line key={line} />
        ))}
      </ul>
    </div>
  );
};
