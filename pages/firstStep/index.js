import Image from 'next/image';
import loaderIcon from '@/public/icons/quizle/loader.svg';
import styles from './styles.module.scss';
import { Goals } from '@/components/goals';
import { GOALS_FIRST_PAGE } from '@/data/data';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Title } from '@/components/ui/title';

const FirstStepPage = () => {
  const router = useRouter();

  useEffect(() => {
    const goToSecondStep = () => {
      router.push('/secondStep');
    };
  
    const interval = setInterval(goToSecondStep, 2000);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <section className={styles.quizle}>
      <Title title="We are crafting your spiritual growth plan" />

      <div className={styles.quizle__imgBlock}>
        <Image
          src={loaderIcon}
          alt="loader icon"
          width={200}
          height={200}
          priority={true}
        />
      </div>

      <Goals list={GOALS_FIRST_PAGE} />
    </section>
  );
};

export default FirstStepPage;
