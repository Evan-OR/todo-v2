import { useEffect } from 'react';
import styles from '../styles/appHeaderStyles.module.scss';

function DateAndTimeDisplay() {
  useEffect(() => {
    // console.log(Date.);
  }, []);

  return (
    <div>
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

export default DateAndTimeDisplay;
