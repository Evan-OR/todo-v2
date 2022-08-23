import styles from '../styles/appHeaderStyles.module.scss';

function AppHeader() {
  return (
    <div className={styles.main}>
      <div className={styles.dateTimeWrapper}>
        <div className={styles.dayNum}>23</div>
        <div className={styles.dayMonthYearWrapper}>
          <div className={styles.day}>Tuesday</div>
          <div className={styles.monthYear}>Aug, 2022</div>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
