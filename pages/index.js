import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello word</h1>

      <div>
        <button type="button" onClick={() => {
          throw new Error("Sentry Frontend Error");
        }}>
          Throw error
        </button>
      </div>
    </div>
  )
}
