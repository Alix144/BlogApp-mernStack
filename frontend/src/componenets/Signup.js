import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import { useDispatch } from "react-redux";
import {authActions} from '../store/index';

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const sendRequest = async() => {
        const res = await axios.post("http://localhost:4000/api/user/signup", {
            name,
            email,
            password
        }).catch(err=>console.log(err))

        const data = await res.data;
        return data;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendRequest().then((data)=>localStorage.setItem("userId", data.user._id)).then(()=>dispatch(authActions.login())).then(()=> navigate("/blogs")).then(data=> console.log(data))
    }

    return ( 
        <form action="" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>

        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>

        <div>
            <label htmlFor="password">Password:</label>
            <input type="Password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>

        <div className='btns'>
            <button type="submit">Submit</button>
            <Link to={"/login"} ><button>Log in</button></Link>
        </div>
    </form>

     );
}
 
export default Signup;