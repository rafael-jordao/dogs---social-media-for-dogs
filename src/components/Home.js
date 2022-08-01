import React from 'react'
import Feed from "../components/Feed/Feed"
import Head from './Helper/Head'
import styles from './Home.module.css'

const Home = () => {
  return (
    <section className={`container mainContainer ${styles.home}`}>
      <Head title ="Fotos" description="Home do site dogs com feed de fotos." />
      <Feed />
    </section>
  )
}

export default Home