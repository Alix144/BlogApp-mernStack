import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddBlog = () => {
    const [title, setTitle] = useState("")
    const [des, setDes] = useState("")
    const [img, setImg] = useState("")

    const navigate = useNavigate()

    const sendRequest = async() => {
        const res = await axios.post("http://localhost:4000/api/blog/add", {
            title,
            description: des,
            image: img,
            user: localStorage.getItem('userId')
        }).catch(err=>console.log(err));
        const data = await res.data;
        return data;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendRequest().then(navigate("/blogs")).then(() => {
            navigate("/myBlogs");
            window.location.reload();});
    }

    return ( 

        <div>
            <form onSubmit={handleSubmit}>
                <h2>Post a New Blog</h2>
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
 
export default AddBlog;