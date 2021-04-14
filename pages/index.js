import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Hello world</h1>
        <p className={styles.text}>
          Róznorodne i bogate doświadczenia, zakres i miejsce szkolenia kadr
          spełnia ważne zadania w wypracowaniu form oddziaływania. Koleżanki i
          koledzy, realizacja nakreślonych zadań programowych uniemożliwia w
          większym stopniu tworzenie nowych propozycji. Praktyka dnia
          codziennego dowodzi że, realizacja nakreślonych zadań programowych
        </p>
        <p className={styles.text}>
          Róznorodne i bogate doświadczenia, zakres i miejsce szkolenia kadr
          spełnia ważne zadania w wypracowaniu form oddziaływania. Koleżanki i
          koledzy, realizacja nakreślonych zadań programowych uniemożliwia w
          większym stopniu tworzenie nowych propozycji. Praktyka dnia
          codziennego dowodzi że, realizacja nakreślonych zadań programowych
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
