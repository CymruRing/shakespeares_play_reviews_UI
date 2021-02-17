import styles from '../styles/about.module.css'

const About = () => {
  return (
    <>
      <p className={styles.p}>
        Shakespeare has been getting a lot of reviews recently about his plays. So far 
        he has managed to build a backend API to serve them, but he doesn’t have the 
        chops to finish out the UI. That’s where this repo comes in.  This repo is the 
        UI for Shakespeare's play reviews. 
        <br/><br/>
        It is built with <strong>Next.js</strong> for streamlined server side rendering and 
        <strong>React</strong> for a streamlined production.  For more see the repo here 
        and try it out for yourself.
        <br/><br/>
        <em>Note: The Api for this app is not public at this time.</em>
      </p>
      <p className={styles.p}></p>
    </>
  );
}

export default About;