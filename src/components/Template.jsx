import React from 'react'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

export default function Template({heading, desc1, desc2, formType, setIsLogedIn}) {
    return (
        <div className="Template">
            <div className="form-container">
                <h2>{heading}</h2>

                <p className="description">
                    <span className='slogan'>{desc1}</span>
                    <br />
                    <span className='sloganItaly'>{desc2}</span>
                </p>

                {
                    (formType === "login")? <LoginPage 
                    setIsLogedIn = {setIsLogedIn}/> 
                    : 
                    <SignUpPage setIsLogedIn = {setIsLogedIn}/>
                }
  
            </div>

            <div className=
                {
                `bg-container ${ (formType === "login") ? "login-bg" : "signup-bg"}`
                }>  

            </div>

        </div>
    )
}

