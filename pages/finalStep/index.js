import { Plans } from '@/components/plans';
import { COMMENTS } from '@/data/data';
import styles from './styles.module.scss';
import { Title } from '@/components/ui/title';
import { Goals } from '@/components/goals';
import {
  GOALS_FINAL_PAGE,
  RESULTS_FINAL_PAGE,
  PLANS,
} from '@/data/data';
import { Comments } from '@/components/comments';
import { useState } from 'react';

const FinalStepPage = () => {
  const [chosenPlan, setChosenPlan] = useState('');

  return (
    <section className={styles.quizle}>
      <Plans
        plan={chosenPlan}
        setPlan={setChosenPlan}
        plans={PLANS}
        type="plan1"
      />

      <div>
        <Title title="What you get" />
        <Goals list={GOALS_FINAL_PAGE} hasIcon={true} />
      </div>

      <div>
        <Title title="People just like you achieved great results with App!" />
        <Goals list={RESULTS_FINAL_PAGE} />
      </div>

      <div>
        <Title title="Users love App!" />
        <Comments comments={COMMENTS} />
      </div>

      <Plans
        plan={chosenPlan}
        setPlan={setChosenPlan}
        plans={PLANS}
        type="plan2"
      />
    </section>
  );
};

export default FinalStepPage;
