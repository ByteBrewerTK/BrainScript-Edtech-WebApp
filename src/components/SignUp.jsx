import React from 'react'
import Template from './Template'

export default function SignUp({setIsLogedIn}) {
  return (
    <div>
      <Template
      heading={"Join the millions learning to code with BrainScript for free"}
      desc1={"Build skills for today, tomorrow, and beyond."}
      desc2={"Education to future-proof your career."}
      formType = {"formType"}
      setIsLogedIn = {setIsLogedIn}
      />
    </div>
  )
}
