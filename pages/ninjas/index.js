import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    //이 함수는 브라우저에서는 절대 실행되지 않는다.
    //빌드시에만 실행된다.
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()

    return {
        //이렇게 하면 이 컴포넌트(Ninjas)에서 props로 이 데이터(ninjas)를 받아올 수 있다.
        props: {ninjas: data}
    }
}

const Ninjas = ({ninjas}) => {
    //ninjas 폴더의 Home 화면
    //보통 리액트라면 useEffect등에서 데이터를 fetch 했겠지만
    //next에서는 pre-render 돼야하기 때문에 다른 방법을 쓴다.
    //
    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map(ninja =>(
                <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}
 
export default Ninjas;