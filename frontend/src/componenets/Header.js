import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    return ( 
       <header>
            <h2>BlogsApp</h2>
            <nav>
                {isLoggedIn && <> <Link to={"/blogs"} >All Blogs</Link>
                <Link to={"/myBlogs"} >My Blogs</Link> </>}

                {isLoggedIn && <Link to={"/auth"} >Logout</Link>}

                {!isLoggedIn && <><Link to={"/auth"} >Login</Link>
                <Link to={"/auth"} >Signup</Link> </>}
            </nav>
       </header> 
    
    );
}
 
export default Header;