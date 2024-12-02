import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/slices/userSlicer";
import { isUserValid } from "../utils/userApi.js";
// import NavBar from "../Components/NavBar.jsx";

const divChoice =
  "bg-bgBtnColor text-center my-10 w-40 mx-auto border-1 rounded-md -mt-2 text-2xl";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkIfUserValid = async () => {
    const dataAuth = await isUserValid();
    if (dataAuth.success) {
      navigate("/");
    } else {
      dispatch(setUser(dataAuth.username));
    }
  };
  checkIfUserValid();
  const user = useSelector((state) => state.user);
  return (
    <>
      <div>
        {/* <NavBar/> */}
        <h1>welcome {user.username}</h1>
      </div>
    </>
  );
};

export default HomePage;
