import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../utils/userApi";

const divChoice =
  "bg-primary text-center my-10 w-40 mx-auto border-1 rounded-md -mt-2 text-2xl";
const inputCss =
  "bg-bgBtnColor text-btnColor rounded-lg my-1 h-14 p-5 text-base";
const submitCss =
  "bg-white text-btnColor rounded-lg my-1 h-14 p-5 text-base leading-none";
const titleCss = `text-center mb-4  font-bold`;

const Login = () => {
  const [btnText, setBtnText] = useState("Login");
  const [msgText, setMsgText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passType, setPassType] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = await signIn(formData);
    setBtnText("loading");
    setMsgText(data.message);
    setTimeout(() => {
      setFormData({
        email: "",
        password: "",
      });
      if (data.isAuth) {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setMsgText(data.error.error);
      }
      setBtnText("SUBMIT");
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <>
      <div className="img"></div>
      <div className={titleCss}>Login to threads</div>
      <div className={titleCss}>{msgText}</div>
      <form
        className={`${divChoice} w-80 bg-transparent`}
        onSubmit={handleFormSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          className={inputCss}
          placeholder="Email"
          value={formData.email}
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          required="true"
        />
        <input
          className={inputCss}
          placeholder="Password"
          type={passType ? "text" : "password"}
          value={formData.password}
          id="password"
          name="password"
          onChange={handleChange}
          required="true"
        />
        <label htmlFor="show">ShowPassword</label>
        <input
          type="checkBox"
          id="show"
          name="show"
          onClick={() => setPassType(!passType)}
        />

        <button className={submitCss} type="submit">
          {btnText}
        </button>
      </form>
    </>
  );
};

export default Login;
