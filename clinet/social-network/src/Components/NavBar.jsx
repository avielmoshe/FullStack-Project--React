import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const iconCss =
  "w-full flex justify-center p-2 hover:bg-hoverColor cursor-pointer ";
function NavBar() {
  const isLog = useSelector((state) => state.user);

  return (
    <div
      className={`${
        isLog.username ? "absolute bottom-0 sm:right-0 " : "hidden"
      }`}
      // className={`flex items-end  w-screen ${
      //   isLog.username ? "flex" : "hidden"
      // } sm:flex-col justify-between w-[60px] `}
    >
      <Link to="/HomePage">
        <div className="hidden sm:flex justify-center ">
          <img
            src="/threads-white-icon.svg"
            alt=""
            className="min-w-[40px] p-[3px] mt-2 max-w-[40px]"
          />
        </div>
      </Link>

      <div className="flex gap-10  sm:flex-col">
        <Link to="/HomePage">
          <div className={iconCss}>
            <HomeIcon sx={{ fontSize: 40, padding: "1px" }} />
          </div>
        </Link>

        <div className={iconCss}>
          <SearchIcon sx={{ fontSize: 40, padding: "1px" }} />
        </div>

        <div className={iconCss}>
          <AddIcon sx={{ fontSize: 40, padding: "1px" }} />
        </div>

        <div className={iconCss}>
          <BookmarksOutlinedIcon sx={{ fontSize: 40, padding: "1px" }} />
        </div>

        <Link to="/MyAccount">
            <div className={iconCss}>
              <Person2OutlinedIcon sx={{ fontSize: 40, padding: "1px" }} />
            </div>
        </Link>
      </div>

      <div></div>
    </div>
  );
}

export default NavBar;
