import { useEffect, useState } from 'react';
import styles from '../styles/appHeaderStyles.module.scss';

function DateAndTimeDisplay() {
  const [time, setTime] = useState<string>('00:00');
  let d = new Date();

  useEffect(() => {
    setTime(getTime());
    setInterval(() => {
      d = new Date();
      setTime(getTime());
    }, 10000);
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

  const getTime = () => {
    const lessThanTenCheck = (num: number) => (num > 9 ? num : '0' + num);

    let minutes = lessThanTenCheck(d.getMinutes());
    let hours = lessThanTenCheck(d.getHours());

    return `${hours}:${minutes}`;
  };

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.dateTimeWrapper}>
        <div className={styles.dayNum}>{formatDate(d.getDate())}</div>
        <div className={styles.dayMonthYearWrapper}>
          <div className={styles.day}>{getDayOfWeek(d.getDay())}</div>
          <div className={styles.monthYear}>
            {getMonthOfTheYear(d.getMonth())}, {d.getFullYear()}
          </div>
        </div>
      </div>
      <div className={styles.time}>{time}</div>
    </div>
  );
}

export default DateAndTimeDisplay;
