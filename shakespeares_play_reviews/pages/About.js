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
        <strong> React</strong> for a streamlined production.  Jest and puppeteer are intended
        for testing soon as some hiccups with their use with next.js are smoothed over.  For more
        see the repo  
        <a href='https://github.com/CymruRing/shakespeares_play_reviews_UI'> here </a>  
        and try it out for yourself.
        <br/><br/>
        <em>Note: The Api for this app is not public at this time but, there is some sample data.
          See index.js for more.</em>
      </p>
      <p className={styles.p}></p>
    </>
  );
}

export default About;