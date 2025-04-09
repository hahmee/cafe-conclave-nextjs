import styles from './main-header-background.module.css';

export default function MainHeaderBackground() {
    return (
        <div className={styles.backgroundContainer}>
            <div className={styles.leftSide}></div>
            <div className={styles.rightSide}></div>
        </div>
    );
}
