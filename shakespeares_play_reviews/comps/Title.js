import styles from '../styles/reviewStyles.module.css'
import Link from 'next/link'

// The title bar of site
const Title = () => {
  return (
  <div className={styles.titleBar}>
    <h1>Shakespeare's Play Reviews</h1>
    <div>
      <h4 className={styles.pageLinks}>
        <Link href='/'>
          <a>Reviews</a>
        </Link>
      </h4>
      <h4 className={styles.pageLinks}> 
        <Link href='/About'>
          <a>About</a>
        </Link>
      </h4>
    </div>
  </div>
  );
};

export default Title;

