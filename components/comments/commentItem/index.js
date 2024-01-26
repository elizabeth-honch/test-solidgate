import Image from 'next/image';
import styles from './styles.module.scss';
import ratingSvg from '@/public/icons/quizle/rating.svg';

export const CommentItem = ({ comment }) => {
  const { user, date, text } = comment;
  return (
    <li className={styles.comment}>
      <div className={styles.comment__header}>
        <p className={styles.comment__title}>{user}</p>
        <Image src={ratingSvg} alt="rating" />
      </div>
      <p className={styles.comment__date}>{date}</p>
      <p className={styles.comment__text}>{text}</p>
    </li>
  );
};
