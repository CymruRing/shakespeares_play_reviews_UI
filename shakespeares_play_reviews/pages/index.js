import Head from 'next/head'
import Reviews from '../comps/Reviews'
import styles from '../styles/styles.module.css'

// Home page, will render Reviews component to _app.js
export default function Home() {
  return (
    <Reviews />
  )
}
