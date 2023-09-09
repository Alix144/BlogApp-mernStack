import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

const Header = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();
    return ( 
       <header>
            <h2>BlogsApp</h2>
            <nav>
                {isLoggedIn && <> <Link to={"/blogs"} >All Blogs</Link>
                <Link to={"/myBlogs"} >My Blogs</Link> </>}

                {isLoggedIn && <Link to={"/login"} onClick={()=>dispatch(authActions.logout())}>Logout</Link>}

                {!isLoggedIn && <><Link to={"/login"} >Login</Link>
                <Link to={"/signup"} >Signup</Link> </>}
            </nav>
       </header> 
    
    );
}
 
export default Header;