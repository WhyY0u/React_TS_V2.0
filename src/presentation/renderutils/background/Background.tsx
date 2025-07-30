import type { MouseEventHandler, ReactNode } from 'react';
import styles from './style/Style.module.css'


type BackgroundProps = {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

const Background: React.FC<BackgroundProps> = ({ children, onClick }) => {
    return (
        <div className={styles.background} onClick={onClick}>
            {children}
        </div>
    );
};


export default Background;
