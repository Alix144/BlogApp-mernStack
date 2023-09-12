import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import hamburger from '../images/menu.png';
import close from '../images/close.png';
import { useState } from "react";

const Header = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [style, setStyle] = useState({})
    const [styleHeader, setStyleHeader] = useState({})

    const handleHamburger = () => {
        setButtonClicked(!buttonClicked)
        setStyle({
            display: 'block',
        })

    }

    const handleClose = () => {
        setButtonClicked(!buttonClicked)
        setStyle({
            display: 'none',
        })
    }

    return ( 
       <header>

        {buttonClicked? 
                <div className="menu">
                <h2>BlogsApp</h2>
    
                <nav style={style}>
                    {isLoggedIn && <> <Link to={"/blogs"} onClick={handleClose}>All Blogs</Link>
                    <Link to={"/myBlogs"} onClick={handleClose}>My Blogs</Link>
                    <Link to={"/blogs/add"} onClick={handleClose}>Add Blog</Link> </>}
    
                    {isLoggedIn && <Link to={"/login"} onClick={()=>dispatch(authActions.logout()).then(handleClose)}>Logout</Link>}
    
                    {!isLoggedIn && <><Link to={"/login"} onClick={handleClose}>Login</Link>
                    <Link to={"/signup"} onClick={handleClose} >Signup</Link> </>}
                </nav>
    
                <img src={close} alt="Close" className="close" onClick={handleClose}/>
                </div>
        : 

        <>
        <h2>BlogsApp</h2>
        
        <img src={hamburger} alt="hamburgerBtn" className="hamburger" onClick={handleHamburger}/>

        <nav>
            {isLoggedIn && <> <Link to={"/blogs"} >All Blogs</Link>
            <Link to={"/myBlogs"} >My Blogs</Link>
            <Link to={"/blogs/add"} >Add Blog</Link> </>}

            {isLoggedIn && <Link to={"/login"} onClick={()=>dispatch(authActions.logout())}>Logout</Link>}

            {!isLoggedIn && <><Link to={"/login"} >Login</Link>
            <Link to={"/signup"} >Signup</Link> </>}
        </nav>
        </>
        }

       </header> 
    
    );
}
 
export default Header;