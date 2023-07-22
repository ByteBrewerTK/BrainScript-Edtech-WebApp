import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {FaGoogle, FaMicrosoft, FaGithub, FaEye, FaEyeSlash} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


export default function SignUpPage({setIsLogedIn}) {

    const [signUpFormData, setsignUpFormData] = useState(
        {
            accoutType:"student",
            firstName:"",
            lastName:"",
            email:"",
            createPassword:"",
            confirmPassword:""
        }
    )

    const [createPassVissible, setCreatePassVissible] = useState(false);

    const [confirmPassVissible, setConfirmPassVissible] = useState(false);

    const changeHandeler = (event) =>{
        const {name} = event.target;
        setsignUpFormData((prev)=>{

            return{
                ...prev,
                [name] : event.target.value
            }
        })
        
    }

    const navigate = useNavigate();

    const submitHandeler = (event)=>{
        event.preventDefault();
        if(signUpFormData.createPassword !== signUpFormData.confirmPassword){
            toast.error("Password doesn't match");
            return;
        }
        setIsLogedIn(true);
        navigate('/dashboard');
        toast.success("Account Created");
        console.log(signUpFormData);
        
    }
    return (
    
        <form className="signup-card" onSubmit={submitHandeler}>
            <div className="accountType">
                <button
                value={"student"}
                type='button'
                name='accoutType'
                onClick={changeHandeler}
                className={(signUpFormData.accoutType === "student") ? "active" : ""}
                >Student</button>

                <button
                value={"instructor"}
                type='button'
                name='accoutType'
                onClick={changeHandeler}
                className={(signUpFormData.accoutType === "instructor") ? "active" : ""}
                >Instructor</button>
            </div>
            <div className='name-field field'>
                <div >

                    <label htmlFor="firstName">First Name<sup>*</sup></label>
                    <input type="text"
                    placeholder='First Name'
                    id='firstName'
                    name='firstName'
                    value={signUpFormData.firstName}
                    onChange={changeHandeler}
                    required
                    />
                </div>
                <div >
                    <label htmlFor="lastName">Last Name<sup>*</sup></label>
                    <input type="text"
                    placeholder='Last Name'
                    id='lastName'
                    name='lastName'
                    value={signUpFormData.lastName}
                    onChange={changeHandeler}
                    required
                    />
                </div>
            </div>

                <div>
                <label htmlFor='email'>Email Address<sup>*</sup></label>
                <div className='field'>
                    <input type="email"
                    placeholder='Enter email address'
                    id='email'
                    name='email'
                    value={signUpFormData.email}
                    onChange={changeHandeler}
                    required
                    />
                </div>
                </div>

            <div className='password-field field'>

                <div className='password'>
                    <label htmlFor="createPassword">Create Password<sup>*</sup></label>
                    <div className='create-pass'>
                        <input 
                        type={
                            createPassVissible ? "text": "password"
                        }
                        placeholder='Enter Password'
                        id='createPassword'
                        name='createPassword'
                        value={signUpFormData.createPassword}
                        onChange={changeHandeler}
                        required
                        />

                        <span className='password-visible' onClick={()=>{setCreatePassVissible(prev => !prev)}}
                        name ="createPasswordVissible">
                            {
                            createPassVissible ? <FaEye/> : <FaEyeSlash/>
                            }
                        </span>
                    </div>

                </div>
                <div className='password'>
                    <label htmlFor='confirmPassword'>Confirm Name<sup>*</sup></label>
                    <div className='confirm-pass'>
                        <input 
                        type={
                            confirmPassVissible? "text": "password"
                        }
                        placeholder='Confirm Password'
                        id='confirmPassword'
                        name='confirmPassword'
                        value={signUpFormData.confirmPassword}
                        onChange={changeHandeler}
                        required
                        />
                        <span className='password-visible' onClick={()=>{setConfirmPassVissible(prev => !prev)}}
                        name ="confirmPasswordVissible">
                            {
                            confirmPassVissible ? <FaEye/> : <FaEyeSlash/>
                            }
                        </span>
                    </div>
                </div>
            </div>

            <span className='signin-using'>or Sign In using</span>

            <button className='submit'>Create Account</button>
            
            <div className="social">
                <span className='social-icon'><FaGoogle/></span>
                <span className='social-icon'><FaMicrosoft/></span>
                <span className='social-icon'><FaGithub/></span>
            </div>
        </form>
    
    )
}
