import { Chart } from '@/components/chart';
import { Button } from '@/components/ui/button';
import styles from './styles.module.scss';
import vectorImg from '@/public/icons/quizle/Vector 1.svg';
import Image from "next/image";
import { useRouter } from 'next/router';
import { Title } from '@/components/ui/title';

const ThirdStepPage = () => {
  const router = useRouter();

  const handleNextPage = () => {
    router.push({
      pathname: '/finalStep',
      query: router.query,
    });
  };

  return (
    <section className={styles.quizle}>
      <Title title="See your Spiritual Growth progress by Sep 17, 2024" />
      
      <div className={styles.quizle__itemEnd}>
        <span className={styles.quizle__timeStart}>
          <span className={styles.quizle__timeStart_date}>Sep 17</span>
          <span className={styles.quizle__timeStart_year}>2024</span>
        </span>
      </div>

      <div className={styles.quizle__chart}>
        <Chart />

        <Image className={styles.quizle__img} src={vectorImg} alt="Vector" />
      </div>

      <span className={styles.quizle__timeNow}>Now</span>

      <Button type="primaryFixed" onClick={handleNextPage}>
        Continue
      </Button>
    </section>
  );
};

export default ThirdStepPage;