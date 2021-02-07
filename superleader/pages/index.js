import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Login from './admin/Login'

export default function Home() {
  return (
    <div className={styles.container}>
        <Login/>
    </div>
  )
}
