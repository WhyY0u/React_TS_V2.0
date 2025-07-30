import { style } from 'framer-motion/m';
import styles from './style/Style.module.css';
import { useEffect, useState } from 'react';
import { useClick } from '@/presentation/wrapper/providers/items/ClickContext';

type HeaderProps = {
  isClick: boolean;
  onClick: () => void;
};

const Header = ({ isClick, onClick }: HeaderProps) => {
  const [isLoading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const { isClickG, setClick } = useClick();
  useEffect(() => {
    const appearTimeout = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    const removeTimeout = setTimeout(() => {
      setLoading(false); 
    }, 2600);

    return () => {
      clearTimeout(appearTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  useEffect(() => {
    if(isClick) {
        setClick();
    }
  }, [isClick]);

  if (isLoading) {
    return (
      <header
        className={`${styles.loaderWrapper} ${
          fadeOut ? styles.loaderFadeOut : styles.loaderFadeIn
        }`}
      >
        <div className={styles.loader}></div>
      </header>
    );
  }

  return (
    <header
      className={`${styles.container} ${isClick ? styles.top : styles.center}`}
      onClick={onClick}
    >
      <p className={`${styles.text} ${isClick ? styles.text_heigh : ''} ${isClick ? styles.top_text_big : styles.big_text}`}>
        S<span className={styles.red}>O</span>S
      </p>
      <p className={`${styles.text} ${styles.delay} ${isClick ? styles.text_heigh : ''} ${isClick ? styles.top_text_small : styles.small_text}`}>
        <span className={styles.red}>A</span>itu
      </p>
        <p className={`${styles.click_me_text} ${isClick ? styles.hide : ''}`}>Нажмите чтобы продолжить</p>
    </header>
  );
};

export default Header;
