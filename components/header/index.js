import Image from 'next/image';
import timeIcon from '@/public/icons/header/Time.svg';
import cameraIcon from '@/public/icons/header/camera.svg';
import cellularIcon from '@/public/icons/header/Cellular.svg';
import wifiIcon from '@/public/icons/header/Wifi.svg';
import batteryIcon from '@/public/icons/header/Battery.svg';
import styles from './styles.module.scss';
import { Menu } from './menu';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__block}>
        <Image src={timeIcon} alt="time icon" />
        <Image src={cameraIcon} alt="camera icon" />

        <div className={styles.header__info}>
          <Image src={cellularIcon} alt="cellural icon" />
          <Image src={wifiIcon} alt="wifi icon" />
          <Image src={batteryIcon} alt="battery icon" />
        </div>
      </div>

      <Menu />
    </header>
  );
};
