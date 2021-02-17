import styles from '../styles/reviewStyles.module.css'
import Image from 'next/image'

// formats individual reviews 
const AReview = ({data}) => {


  // convert date in yyyy-mm-ddt to month d, yyyy
  let formatDate = (input) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                  'August', 'September', 'October', 'November', 'December'];
    let year = input.slice(0,4);
    let month = months[input.slice(6,7) - 1];
    let day = input.slice(9, 10);
    return `${month} ${day}, ${year}`;
  };
  

  return (
    <div className={styles.AReview}>
    <strong>{data.author}</strong>
      <strong> {data.rating}</strong>
      <Image src='/StarRatings.png' alt='stars' width='125' height='25' />
      <p>{formatDate(data.publish_date)}</p>
      <p>{data.body}</p>
    </div>
  );
};

export default AReview;