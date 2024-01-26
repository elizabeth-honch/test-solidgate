import styles from './styles.module.scss';
import clsx from 'clsx';

export const Button = ({ type, customStyle = {}, onClick, children }) => {
  return (
    <button
      style={customStyle}
      className={clsx(
        type === 'invisible' && styles.invisibleBtn,
        type === 'primary' && styles.primaryBtn,
        type === 'primaryFixed' && styles.primaryFixedBtn,
        styles.btn,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
