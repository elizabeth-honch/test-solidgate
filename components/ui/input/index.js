import styles from './styles.module.scss';
import localFont from 'next/font/local';
import clsx from 'clsx';
import { useRef } from 'react';

const fixelFont = localFont({ src: '../../../fonts/FixelText-Bold.woff2' })

export const Input = ({ email, setEmail, labelText, validEmail }) => {
  const inpBlock = useRef(null);

  const handleFocusInput = () => {
    inpBlock.current.focus();
  };

  const handleChangeInput = ({ target }) => {
    setEmail(target.value);
  };

  return (
    <div
      className={clsx(
        styles.inputBlock,
        !validEmail && styles.inputBlock__error
      )}
      ref={inpBlock}
    >
      <label
        className={clsx(
          fixelFont.className,
          styles.inputBlock__label
        )}
      >
        {labelText}
      </label>

      <input
        className={styles.input}
        type="email"
        value={email}
        onChange={handleChangeInput}
        onFocus={handleFocusInput}
      />
    </div>
  );
};
