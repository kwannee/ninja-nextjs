import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({children}) => {
    //children은 이 Layout 컴포넌트 안에 있는(nested) 컴포넌트를 말한다.
    return (  
        <div className="content">
            <Navbar/>
            { children }
            <Footer/>
        </div>
    );
}
 
export default Layout;