import { useCheckIfUserValid } from "../hooks/use-check-if-user-valid";
import { useState } from "react";

const divChoice =
  "bg-primary text-center my-10 w-40 mx-auto border-1 rounded-md -mt-2 text-2xl";
const inputCss =
  "bg-bgBtnColor text-btnColor rounded-lg my-1 h-14 p-5 text-base";
const submitCss =
  "bg-white text-btnColor rounded-lg my-1 h-14 p-5 text-base leading-none";
const titleCss = `text-center mb-4  font-bold`;

const EditProfile = () => {
  const [btnText, setBtnText] = useState("Login");
  const [msgText, setMsgText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleFormSubmit = async (e) => {};

  useCheckIfUserValid();
  return (
    <div className="h-screen p-[20px] sm:mr-[70px}">
      <h1 className={titleCss}>Add new post</h1>
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
          required={true}
        />
        <input
          className={inputCss}
          placeholder="Password"
          type="text"
          value={formData.password}
          id="password"
          name="password"
          onChange={handleChange}
          required={true}
        />
        <button
          className={`${submitCss} ${isSubmitted ? "animate-pulse" : ""}`}
          type="submit"
        >
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
