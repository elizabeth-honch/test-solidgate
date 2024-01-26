import styles from './styles.module.scss';
import clsx from 'clsx';

export const PlanItem = ({ name, price, popular = false, setPlan, checked, type }) => {
  const handleChosenPlan = ({ target }) => {
    setPlan(target.value);
  };

  return (
    <li className={clsx(styles.plan, checked && styles.plan__checked)} id={name}>
      {popular && <p className={styles.tag}>Most popular</p>}

      <label className={styles.plan__container}>
        <div className={styles.plan__group}>
          <input
            type="radio"
            value={name}
            name={type}
            id={name}
            onChange={handleChosenPlan}
            checked={checked}
          />

          <p className={styles.plan__title}>{name}</p>
        </div>

        <div className={styles.plan__priceBlock}>
          <span className={styles.plan__priceBlock_currency}>
            $
          </span>

          <span className={styles.plan__priceBlock_price}>
            {price}
          </span>
        </div>
      </label>
    </li>
  );
};
