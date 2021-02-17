import Head from 'next/head'
import styles from '../styles/reviewStyles.module.css'
import Title from './Title'


// Configures the Layout for reuse as needed
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Shakespeare's Play Reviews</title>
      </Head>
      <div className={styles.Layout}>
        <Title />
        { children }
      </div>
    </>
  );
}

export default Layout;