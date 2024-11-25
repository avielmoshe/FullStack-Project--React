import React from 'react'
import { useState , useRef } from 'react'
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [btnText , setBtnText] = useState("Submit")

  const userNameRef = useRef("");
  const emailRef = useRef("");

  const navigate = useNavigate();

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    setBtnText("loading")
    
    console.log(userNameRef.current.value);
    console.log(emailRef.current.value);
    setTimeout(()=>{
      userNameRef.current.value=""
      emailRef.current.value=""
      setBtnText("SUBMIT")
      setTimeout(()=>{
        navigate("/")
      },1000)
  },2000)
  }

  return (
    <>
    <div>SignUp</div>
    <form
      onSubmit={handleFormSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "black",
        padding: "1.5rem",
        gap: "1rem",
      }}
    >
      <label htmlFor="userName">userName</label>
      <input
        ref={userNameRef}
        type="text"
        id="userName"
        name="userName"
      />
      <label htmlFor="email">Email</label>
      <input
        ref={emailRef}
        type="text"
        id="email"
        name="email"
      />
      <button type="submit">{btnText}</button>
    </form>
  </>
  )
}

export default Register