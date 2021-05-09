import Link from 'next/link'
import {useEffect,useState} from 'react'
import {useRouter} from 'next/router'

const NotFound = () => {
    const router = useRouter();
    const [seconds, setSeconds] = useState(3)
    useEffect(() => {
        setTimeout(() => {
            //router.go()
            //go에는 -1이나 1 을 쓸 수있는데 -1이면 뒤로가기 1이면 앞으로가기
            router.push('/')
        }, 3000);
    }, [])
    setInterval(() => {
        setSeconds(seconds-1)
    }, 1000);
    return (
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Move to <Link href="/"><a>Homepage</a></Link> after {seconds} seconds</p>
        </div>
    );
}
 
export default NotFound;