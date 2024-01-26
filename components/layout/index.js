import { Header } from '@/components/header';
import styles from './styles.module.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.section}>
        {children}
      </main>
    </>
  );
};
