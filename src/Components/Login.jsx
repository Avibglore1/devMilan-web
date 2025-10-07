import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email,setEmail] = useState("rani@ygmail.com");
    const [password,setPassword] = useState("Rani@123");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = async() =>{     
        try {
            const response = await axios.post(
                        "http://localhost:3000/login",
                        {emailId: email,password: password},
                        {withCredentials: true}
                        ) 
        dispatch(addUser(response.data));
        navigate("/feed")
    
        } catch (error) {
            console.error(error)
        }        
    }
  return (
    <div className="card bg-base-200 w-96 shadow-sm flex mx-auto mt-10 ">
        <div className="card-body flex items-center justify-center">
            <h2 className="card-title">Login</h2>
            <div>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl"
                    >Email</legend>
                    <input 
                    type="text" 
                    className="input" 
                    placeholder="Type here"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl">Password</legend>
                    <input 
                    type="text" 
                    className="input" 
                    placeholder="Type here"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} />
                </fieldset>
            </div>
            <div className="card-actions justify-end">
            <button 
            className="btn btn-primary"
            onClick={handleLogin}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login