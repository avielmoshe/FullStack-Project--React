import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const divChoice =
  "bg-bgBtnColor text-center my-10 w-40 mx-auto border-1 rounded-md -mt-2 text-2xl";

const HomePage = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div>
        <h1>welcome {user.username}</h1>
      </div>
    </>
  );
};

export default HomePage;
