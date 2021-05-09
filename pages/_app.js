import Layout from '../comps/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  //app.js는 root 컴포넌트. 다양한 페이지 컴포넌트들이 렌더된다.
  //pages 폴더 밑에 js파일을 만들면 그 파일 이름으로 route가 생성된다.
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
