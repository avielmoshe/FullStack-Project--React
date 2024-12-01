import React from 'react'
import { useState , useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { signIn } from '../utils/userApi';


const divChoice ='bg-primary text-center my-10 w-40 mx-auto border-1 rounded-md -mt-2 text-2xl'
const inputCss = 'bg-bgBtnColor text-btnColor rounded-lg my-1 h-14 p-5 text-base'
const submitCss ='bg-white text-btnColor rounded-lg my-1 h-14 p-5 text-base leading-none'
const titleCss = `text-center mb-4  font-bold`

const Login = () => {
  const [btnText , setBtnText] = useState("Login")
  const [isSubmitted , setIsSubmitted] = useState(false)
  const [passType , setPassType] = useState(false)

  const userNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");


  const navigate = useNavigate();

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    signIn(user);
    const user = {userName: userNameRef, email: emailRef, password: passwordRef }
    signUp(user)
    setBtnText("loading")
    
    console.log(userNameRef.current.value);
    console.log(emailRef.current.value);
    setTimeout(()=>{
      userNameRef.current.value=""
      emailRef.current.value=""
      setTimeout(()=>{
        // navigate("/")
      },1000)
      setBtnText("SUBMIT")
      setIsSubmitted(false)
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
            <input
      className={inputCss}
      placeholder='Password'
        ref={passwordRef}
        type={passType ? "text" : "password"}
        id="password"
        name="password"
      />
        <label htmlFor="show">ShowPassword</label>
        <input type="checkBox" id="show" name="show" onClick={()=>setPassType(!passType) }/>
        
      <button className={submitCss} type="submit" >{btnText}</button>
    </form>
  </>
  )
}

export default Login