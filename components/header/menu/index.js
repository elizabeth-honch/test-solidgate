import Image from 'next/image';
import backIcon from '@/public/icons/menu/back.svg';
import menuIcon from '@/public/icons/menu/menu.svg';
import { Button } from '../../ui/button';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

export const Menu = () => {
  const router = useRouter();

  const handleGoBack = () => {
    if (router.pathname.length > 1) {
      router.back();
    }
  };

  return (
    <div className={styles.menu}>
      <Button type="invisible" onClick={handleGoBack}>
        <Image src={backIcon} alt="back icon" />
      </Button>

      <p className={styles.menu__text}>App</p>

      <Button type="invisible">
        <Image src={menuIcon} alt="menu icon" />
      </Button>
    </div>
  )
};
