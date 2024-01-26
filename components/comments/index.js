import { CommentItem } from './commentItem';
import styles from './styles.module.scss';

export const Comments = ({ comments }) => {
  return (
    <ul className={styles.comments}>
      {comments.map(comment => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};
