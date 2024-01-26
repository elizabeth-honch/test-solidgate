import { PlanItem } from './planItem';
import { Title } from '../ui/title';
import { Button } from '../ui/button';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

export const Plans = ({ plan, setPlan, plans, type }) => {
  const router = useRouter();

  const handleChecking = (name) => {
    return plan === name;
  };

  const showResults = () => {
    const email = router.query;
    const result = {
      plan: plan,
      ...email,
    };
    console.log('RESULT =  ', result);
  };

  return (
    <section className={styles.plans}>
      <Title title="Choose your plan" />

      <ul className={styles.plans__list}>
        {plans.map(planD => (
          <PlanItem
            key={planD.name}
            setPlan={setPlan}
            name={planD.name}
            price={planD.price}
            popular={planD.popular}
            checked={handleChecking(planD.name)}
            type={type}
          />
        ))}
      </ul>

      <div className={styles.plans__btnBlock}>
        <Button type="primary" onClick={showResults}>
          Get my plan
        </Button>
      </div>

      <p className={styles.plans__info}>
        You are enrolling in a 3-monthly subscription to 
        <a
          className={styles.plans__info_link}
          href="https://awesomeapp.com/subscription"
          target="_blank"
        >
          {' '}https://awesomeapp.com/subscription{' '}
        </a>
        with the discount price $29.99. You agree that the plan you selected will automatically be extended
        at the full price for successive renewal periods and you will be charged $99.99 every 3 months until
        you cancel the subscription. Payments will be charged from the card you specified here. You can cancel
        your subscription by contacting our customer support team via email at support@awesomeapp.com Subscription
        Policy. The charge will appear on your bill as &quot;awesomeapp&quot;
      </p>
    </section>
  );
};
