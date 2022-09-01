import { useEffect } from 'react';
import styles from '../styles/appHeaderStyles.module.scss';

function DateAndTimeDisplay() {
  const d = new Date();
  useEffect(() => {
    // console.log(Date.);
  }, []);

  const getDayOfWeek = (num: number) => {
    const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfTheWeek[num];
  };

  const getMonthOfTheYear = (num: number) => {
    const monthOfTheYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthOfTheYear[num];
  };

  const formatDate = (num: number) => {
    return num > 9 ? num : '0' + num;
  };

  return (
    <div>
      <div className={styles.dateTimeWrapper}>
        <div className={styles.dayNum}>{formatDate(d.getDate())}</div>
        <div className={styles.dayMonthYearWrapper}>
          <div className={styles.day}>{getDayOfWeek(d.getDay())}</div>
          <div className={styles.monthYear}>
            {getMonthOfTheYear(d.getMonth())}, {d.getFullYear()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateAndTimeDisplay;
