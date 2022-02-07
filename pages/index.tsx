import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  var interval = 1000; // how much time should the delay between two iterations be (in milliseconds)?
  var promise = Promise.resolve();

  const [word, setWord] = useState('')
  function doSetTimeout(i: string) {
    setTimeout(function () {
      console.log(i);
      setWord(word + i)
    }, 500);

  }


  async function writeWord(word: string) {
    for (let i = 0; i < word.length; i++) {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          setWord(word.slice(0, i + 1))
          console.log(word)
          resolve();
        }, 100);
      });
    }
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });

  }

  async function deleteWord(word:string) {
    console.log(word);
    for (let i = 0; i < word.length; i++) {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          setWord(word.slice(0, -(i+1)))
          console.log('delete')
          resolve();
        }, 70);
      });
    }
  }
  useEffect(() => {
  var array = ['creando', 'aprendiendo', 'estudiando'];

    async function writeWords(): Promise<void> {
      for (var i = 0; i < Infinity; i++) {

        await writeWord(array[0]);
        await deleteWord(array[0]);
        await writeWord(array[1]);
        await deleteWord(array[1]);
        await writeWord(array[2]);
        await deleteWord(array[2]);
      }

    }

    writeWords()

}, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Renzo Damian | Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <h1 id={styles.logo}>renzo@damian<span id={styles.block}>█</span></h1>
        <ul className={styles.nav_links}>
          <li className={styles.flex_child}>
            Projectos

          </li>
          <li className={styles.flex_child}>
            Acerca de mí

          </li>
          <li className={styles.flex_child}>
            Contáctame

          </li>
        </ul>



      </nav>
      <div className={styles.container}>
        <h2 className={styles.statement}>
          Hola soy Renzo Damian 👋<br />
          Actualmente trabajando en <a href="https://rebels247.com/"> @Rebels247</a><br />
          <span>{word}</span><span id={styles.block}>█</span>nuevas formas de ver la web

        </h2>
      </div>

      <div className={styles.container}>
        <div className={styles.projects}>
          <div className={styles.project}>

          </div>
          <div className={styles.project}>

          </div>
          <div className={styles.project}>

          </div>
          <div className={styles.project}>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
