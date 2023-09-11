import { useNavigate } from 'react-router-dom';
import deleteIcon from '../images/delete.png';
import editIcon from '../images/edit.png';
import axios from 'axios';

const Blog = ({title, description, image, userName, isUser, id}) => {

    const navigate = useNavigate()

    const handleEdit = () => {
        navigate(`/myBlogs/${id}`)
    }

    const deleteRequest = async() => {
        const res = axios.delete(`http://localhost:4000/api/blog/${id}`).catch(err=>console.log(err))
        const data = await res.data;
        return data;
    }

    const handleDelete = () => {
        deleteRequest().then(()=>navigate("/")).then(()=>navigate("/blogs"))
    }

    return ( 
        <div className="card">
            <div className="head">
                <div className='div1'>
                    <div className="pic">{userName.charAt(0).toUpperCase()}</div>
                    <h4>{userName}</h4>
                </div>
                {isUser && <div className='icons'>
                    <img src={editIcon} alt="Edit" onClick={handleEdit}/>
                    <img src={deleteIcon} alt="Delete" onClick={handleDelete}/>
                </div>}
            </div>
            <h5>{title}</h5>
            <img src={image} alt="img" className='postImg'/>
            <p>{description}</p>
        </div>
     );
}
 
export default Blog;