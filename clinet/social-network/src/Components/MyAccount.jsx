import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector, useDispatch } from "react-redux";
import { useCheckIfUserValid } from "../hooks/use-check-if-user-valid";
import { deleteCookie } from "../utils/cookie";
import { setUser } from "../store/slices/userSlicer";

const MyAccount = () => {
  const dispatch = useDispatch();

  const userName = useSelector((state) => state.user.username);
  const submitCss =
    "bg-white text-btnColor rounded-lg my-1 h-1 p-5 leading-none";
  useCheckIfUserValid();

  function handleLogout() {
    deleteCookie();
    dispatch(setUser(false));
  }

  return (
    <div className="h-screen p-[20px] ">
      <div className=" sm:mr-[70px]">
        <p className="text-[35px] mb-[10px]">{userName}</p>
        <AccountCircleIcon sx={{ fontSize: "40px", marginBottom: "5px" }} />
        <p>"bio"</p>
        <button className={submitCss}>Edit profile</button>
        <button onClick={handleLogout} className={submitCss}>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
