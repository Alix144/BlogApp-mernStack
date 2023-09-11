import Blog from "./Blog";
import axios from "axios";
import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState();

    const sendRequest = async() => {
        const res = await axios.get("http://localhost:4000/api/blog").catch(err=>console.log(err))
        const data = await res.data
        return data;
    }

    useEffect(() => {
        sendRequest().then(data=>setBlogs(data.blogs))
    },[])
    console.log(blogs)
    return ( 
        <div>
            {blogs && blogs.map((blog, index)=>{
                console.log(blog.user)
                return <Blog key={index} isUser={localStorage.getItem("userId")===blog.user._id} id={blog._id} title={blog.title} description={blog.description}  image={blog.image} userName={blog.user.name}/>
            })}
        </div>
     );
}
 
export default Blogs;