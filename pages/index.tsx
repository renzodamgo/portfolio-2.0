/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const [show, setShow] = useState(false)
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

  async function deleteWord(word: string) {
    console.log(word);
    for (let i = 0; i < word.length; i++) {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          setWord(word.slice(0, -(i + 1)))
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
    <div>
      <Head>
        <title>Renzo Damian | Web Developer</title>
        <meta name="description" content="Hola soy Renzo Damian 👋 Soy desarrollador web actualmente trabajando en @Rebels247, creando█nuevas formas de ver la web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>

        <div className={styles.container}>
          <h2 className={styles.statement}>
            Hola soy Renzo Damian 👋<br />
            Actualmente trabajando en <a className='link' href="https://rebels247.com/"> @Rebels247</a><br />
            <span>{word}</span><span id={styles.block}>█</span>nuevas formas de ver la web

          </h2>
        </div>

        <div className={styles.container}>
          <div className={styles.projects}>
            {/* <Link href={'/proyectos/camupc'}>
              <a>
                <div className={styles.project} id={styles.camupc}>
                  <img src="img/CAMUPC.svg" alt="" />
                  <div>
                  </div>



                </div>
              </a>
            </Link>
             */}
            <Link href={'/proyectos/camupc'}>
              <a href='https://www.rebels247.com/' target={'_blank'} rel={'noreferrer'}>
                <div className={styles.project} id={styles.rebels}>
                  <img src="img/logo_white.svg" alt="" />
                  <div>
                    {/* <h2>Congreso Anual<br/> de Marketing UPC</h2> */}
                  </div>



                </div>
              </a>
            </Link>
            <Link href={'/proyectos/camupc'}>
              <a href='https://www.inet.com.pe/' target={'_blank'} rel={'noreferrer'}>

                <div className={styles.project} id={styles.inet}>
                  <img src="img/inet_logo.png" alt="" />
                  <div>
                    {/* <h2>Congreso Anual<br/> de Marketing UPC</h2> */}
                  </div>



                </div>
              </a>
            </Link>
            <Link href={'/proyectos/camupc'}>
              <a href='https://camupc.com/home' target={'_blank'} rel={'noreferrer'}>

                <div className={styles.project} id={styles.camupc}>
                  <img src="img/CAMUPC.svg" alt="" />
                  <div>
                    {/* <h2>Congreso Anual<br/> de Marketing UPC</h2> */}
                  </div>



                </div>
              </a>
            </Link>
            <div id={styles.other_links}>
              <h3>Otros Links</h3>

              <a target={'_blank'} rel={'noreferrer'} href="https://www.dermosamm.com/">Dermosamm</a>
              <a target={'_blank'} rel={'noreferrer'} href="https://www.diegofarfan.com/">Diego Farfán</a>
              <a target={'_blank'} rel={'noreferrer'} href="https://www.arnispremium.com/">Arnis Premium</a>
              <a target={'_blank'} rel={'noreferrer'} href="https://www.zotianmotors.com/">Zotian Motors</a>


            </div>
          </div>
        </div>
      </Layout>

    </div>
  )
}

export default Home
