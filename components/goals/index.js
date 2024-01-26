import Image from 'next/image';
import styles from './styles.module.scss';
import checkIcon from '@/public/icons/quizle/shape.svg';

export const Goals = ({ list, hasIcon = false }) => {
  return (
    <ul className={styles.goals}>
      {list.map(goal => (
        <li
          className={styles.goals__item}
          key={goal?.text ? goal.text : goal}
        >
          {goal?.text
            ? (
              <div className={styles.goals__quantity}>
                {goal.quantity}
              </div>
            ) : (
              <div className={styles.goals__icon}>
                {hasIcon && (
                  <Image src={checkIcon} alt="check icon" />
                )}
              </div>
            )
          }

          <span className={styles.goals__text}>
            {goal?.text ? goal.text : goal}
          </span>
        </li>
      ))}
    </ul>
  );
};
