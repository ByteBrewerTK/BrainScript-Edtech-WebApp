import React from 'react'
import Template from './Template'

export default function Login({setIsLogedIn}) {
  return (
    <div className='Login'>
      <Template
      heading={"Welcome Back"}
      desc1={"Build skills for today, tomorrow, and beyond"}
      desc2={"Education to future-proof your career"}
      formType = {"login"}
      setIsLogedIn = {setIsLogedIn}
      />
    </div>
  )
}
