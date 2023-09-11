import Login from "./componenets/Login";
import Signup from "./componenets/Signup";
import Blogs from "./componenets/Blogs";
import UserBlogs from "./componenets/UserBlogs";
import BlogDetail from "./componenets/BlogDetail";
import AddBlog from "./componenets/AddBlog";
import Header from "./componenets/Header";
import {Routes, Route} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authActions } from "./store";

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem("userId")){
      dispatch(authActions.login());
    }
  }, [dispatch])
  return (
    <div className="App">
      <Header/>
      <Routes>
            {!isLoggedIn ?
            <>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            </> :
            <>
            <Route path="/blogs" element={<Blogs />}/>
            <Route path="/myBlogs" element={<UserBlogs />}/>
            <Route path="/myBlogs/:id" element={<BlogDetail />}/>
            <Route path="/blogs/add" element={<AddBlog />}/> 
            </>}
      </Routes>
    </div>
  );
}

export default App;
