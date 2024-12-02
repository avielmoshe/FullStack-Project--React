import React from 'react'
import { Link } from 'react-router-dom'
//components



//turnery to check if user is signed if not redirect to here 

<<<<<<< HEAD
const divChoice ='bg-primary text-center my-10 w-40 mx-auto border-1 rounded-md -mt-2 text-2xl'
=======
const divChoice ='bg-bgBtnColor text-center my-10 w-40 mx-auto border-1 rounded-md -mt-2 text-2xl'
>>>>>>> origin/main
 
const LandingPage = () => {
  return (
    <>
    <div className='img'></div>
    
    <h1 className='text-center my-10 text-5xl' >Threads MOCK</h1>
      <div className={divChoice}>
<<<<<<< HEAD
        <Link to = {`/signin`} className={`${divChoice} w-40 block`}>
=======
        <Link to = {`/signin`} className={`${divChoice} text-btnColor w-40 block`}>
>>>>>>> origin/main
        <button>
        Sign In
        </button>
        </Link>
      </div>
<<<<<<< HEAD
      <Link to = {`/signup`} className={`${divChoice} w-40 block animate-bounce`}>
=======
      <Link to = {`/signup`} className={`${divChoice} text-btnColor w-40 block animate-bounce`}>
>>>>>>> origin/main
        <button>
        Sign Up
        </button>
        </Link>
        
    </>
  )
}

export default LandingPage