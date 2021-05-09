import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  //index는 첫 Home페이지용.
  //index는 page밑에 있지만 index라는 route가 아니다. 예외이다.


  //styles를 이용하면 이 페이지만을 위한 css 모듈을 사용할 수 있다.
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Et minim dolore aliqua deserunt proident aliquip nisi ullamco laborum.</p>
        <p className={styles.text}>Et minim dolore aliqua deserunt proident aliquip nisi ullamco laborum.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
