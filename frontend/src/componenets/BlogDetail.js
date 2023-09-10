import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const BlogDetail = () => {
    const [title, setTitle] = useState("")
    const [des, setDes] = useState("")
    const [img, setImg] = useState("")

    const navigate = useNavigate();

    const [blog, setBlog] = useState()
    const id = useParams().id

    const fetchDetails = async() => {
        const res = await axios.get(`http://localhost:4000/api/blog/${id}`).catch(err=>console.log(err))
        const data = await res.data;
        return data;
    }

    useEffect(()=>{ 
        fetchDetails()
        .then((data)=>{
            setBlog(data)
            setTitle(data.blog.title);
            setDes(data.blog.description);
            setImg(data.blog.image)
        })
    },[id])

    const sendRequest = async() => {
        const res = await axios.put(`http://localhost:4000/api/blog/update/${id}`,{
            title,
            description: des,
            image: img,
        }).catch(err=>console.log(err))
        const data = await res.data;
        return data;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendRequest().then(data=>console.log(data)).then(alert("Updated Successfully")).then(navigate("/myBlogs"))
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Edit Blog</h2>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="des">Description:</label>
                    <input type="text" name="des" id="des" value={des} onChange={(e)=>setDes(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="img">Image:</label>
                    <input type="text" name="img" id="img" value={img} onChange={(e)=>setImg(e.target.value)}/>
                </div>

                <button>Submit</button>
            </form>
        </div>
     );
}
 
export default BlogDetail;