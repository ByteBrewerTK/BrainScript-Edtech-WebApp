import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {FaGoogle, FaMicrosoft, FaGithub, FaLock, FaEnvelope, FaEye, FaEyeSlash} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



export default function LoginPage({setIsLogedIn}) {

    const [isVisible, setIsVisible] = useState(false);

    const navigate = useNavigate();

    const submitHandeler = (event)=>{
        event.preventDefault();
        setIsLogedIn(true);
        toast.success("Logged In");
        navigate('/dashboard');
    }
    return (

        <form className="login-card" onSubmit={submitHandeler}>
            <label htmlFor="login-email" className='email-label'>Email</label>
            <div className="login-email">
                
                <span><FaEnvelope/></span>
                <input type="email"
                placeholder="Enter your email"
                id="login-email"
                className="input-type"
                required
                />
            </div>
            <label htmlFor="user-password">Password</label>
            <div className="password-card">
                <span><FaLock/></span>
                <input type={isVisible ? "text" : "password"}
                placeholder="Enter your password"
                id="user-password"
                className="input-type"
                min={6}
                max={15}
                required
                />
                <span className='password-visible' onClick={() =>{setIsVisible(prev => !prev)}}>{isVisible ? <FaEye/> : <FaEyeSlash/>}</span>
            </div>
            <span id="forgot-password">forgot password?</span>
            
            <button type="submit" id="btn-submit">LOGIN</button>
            <span className="login-using">or Login Using</span>
            <div className="social">
                <span className='social-icon'><FaGoogle/></span>
                <span className='social-icon'><FaMicrosoft/></span>
                <span className='social-icon'><FaGithub/></span>
                
                
                
            </div>
        </form>

    );
}
