import styles from '../styles/styles.module.css'
import Title from './Title'


// Configures the Layout for reuse as needed
const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Title />
      { children }
    </div>
  );
}

export default Layout;