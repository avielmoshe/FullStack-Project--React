import React from 'react'
import { useState , useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { signUp } from '../utils/userApi';


const divChoice ='bg-primary text-center my-10 w-40 mx-auto border-1 rounded-md -mt-2 text-2xl'
const inputCss = 'bg-bgBtnColor text-btnColor rounded-lg my-1 h-14 p-5 text-base'
const submitCss ='bg-white text-btnColor rounded-lg my-1 h-14 p-5 text-base leading-none'
const titleCss = `text-center mb-4  font-bold`

const Login = () => {
  const [btnText , setBtnText] = useState("Login")

  const userNameRef = useRef("");
  const emailRef = useRef("");

  const navigate = useNavigate();

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    signUp(userNameRef, emailRef);
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
    <div className='img'></div>
    <div className={titleCss}>Login to threads</div>
    <form className={`${divChoice} w-80 bg-transparent`}
      onSubmit={handleFormSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input
      className={inputCss}
      placeholder='userName'
        ref={userNameRef}
        type="text"
        id="userName"
        name="userName"
      />
      <input
      className={inputCss}
      placeholder='Email'
        ref={emailRef}
        type="text"
        id="email"
        name="email"
      />
      <button className={submitCss} type="submit" >{btnText}</button>
    </form>
  </>
  )
}

export default Login