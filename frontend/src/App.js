import Auth from "./componenets/Auth";
import Blogs from "./componenets/Blogs";
import UserBlogs from "./componenets/UserBlogs";
import BlogDetail from "./componenets/BlogDetail";
import AddBlog from "./componenets/AddBlog";
import Header from "./componenets/Header";
import {Routes, Route} from 'react-router-dom'
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn)
  return (
    <div className="App">
      <Header/>
      <Routes>
            <Route path="/auth" element={<Auth />}/>
            <Route path="/blogs" element={<Blogs />}/>
            <Route path="/myBlogs" element={<UserBlogs />}/>
            <Route path="/myBlogs/:id" element={<BlogDetail />}/>
            <Route path="/blogs/add" element={<AddBlog />}/>
      </Routes>
    </div>
  );
}

export default App;
