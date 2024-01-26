import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Title } from '@/components/ui/title';
import { useRouter } from 'next/router';
import { useState} from 'react';

const SecondStepPage = () => {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const router = useRouter();

  const isValidEmail = (email) => {
    return email?.length > 0 ? /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email) : false;
  };

  const handleNextPage = () => {
    setValidEmail(isValidEmail(email));
    if (isValidEmail(email)) {
      router.push({
        pathname: '/thirdStep',
        query: { email: email },
      });
    }
  };

  return (
    <section>
      <Title
        title="Enter your email to get your personalised Spiritual Growth Plan"
      />

      <Input email={email} setEmail={setEmail} validEmail={validEmail} labelText="Email" />

      <Button type="primaryFixed" onClick={handleNextPage}>
        Continue
      </Button>
    </section>
  );
};

export default SecondStepPage;
