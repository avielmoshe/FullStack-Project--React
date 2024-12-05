import { useCheckIfUserValid } from "../hooks/use-check-if-user-valid";
import { useState } from "react";
import { deleteUser } from "../utils/userApi";

const divChoice = "w-[470px] mx-auto text-m";
const inputCss =
  "bg-bgBtnColor text-btnColor rounded-lg my-4 mx-3 h-6 p-3 text-base w-full";
const submitCss =
  "bg-bgBtnColor text-btnColor rounded-lg my-1 p-1.5 text-[17px] leading-none hover:bg-btnHover transition-all duration-300";
const deleteCss =
  "bg-red-900 text-btnColor rounded-lg my-14 p-1.5 text-[17px] leading-none w-full hover:bg-red-700 transition-all duration-300";
const titleCss = `text-center mb-4 font-bold`;

const EditProfile = () => {
  const [btnText, setBtnText] = useState("Submit");
  const [msgText, setMsgText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    NikName: "",
    bio: "",
    username: "",
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setBtnText("Submitting...");
    setTimeout(() => {
      setBtnText("Submit");
      setMsgText("Profile updated successfully!");
      setIsSubmitted(false);
    }, 2000);
  };

  useCheckIfUserValid();
  return (
    <div className="h-screen p-[20px] sm:mr-[70px}">
      <h1 className={titleCss}>Edit Your Profile Details</h1>
      <div className={titleCss}>{msgText}</div>
      <div className={`${divChoice}`}>
        <label htmlFor="avatar">Change a profile picture:</label>
        <input
          className="bg-bgBtnColor text-btnColor rounded-lg my-4 mx-3 h-6 p-20 text-base w-full"
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />
        <form
          onSubmit={handleFormSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <label htmlFor="NikName">Change NikName:</label>
            <input
              className={inputCss}
              placeholder="NikName"
              value={formData.NikName}
              type="text"
              id="NikName"
              name="NikName"
              onChange={handleChange}
              required={true}
            />
          </div>
          <div>
            <label htmlFor="bio">Change Bio:</label>
            <input
              className={inputCss}
              placeholder="Bio"
              value={formData.bio}
              type="text"
              id="bio"
              name="bio"
              onChange={handleChange}
              required={true}
            />
          </div>
          <div>
            <label htmlFor="username">Change UserName:</label>
            <input
              className={inputCss}
              placeholder="UserName"
              value={formData.username}
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              required={true}
            />
          </div>
          <div>
            <label htmlFor="email">Change Email:</label>
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
          </div>
          <div>
            <label htmlFor="password">Change Password:</label>
            <input
              className={inputCss}
              placeholder="Password"
              value={formData.password}
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              required={true}
            />
          </div>
          <button
            className={`${submitCss} ${isSubmitted ? "animate-pulse" : ""}`}
            type="submit"
          >
            {btnText}
          </button>
        </form>
        <button className={deleteCss} onClick={() => deleteUser()}>
          DELETE USER
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
