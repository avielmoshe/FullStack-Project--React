import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector, useDispatch } from "react-redux";
import { useCheckIfUserValid } from "../hooks/use-check-if-user-valid";
import { deleteCookie } from "../utils/cookie";
import { setUser } from "../store/slices/userSlicer";

const MyAccount = () => {
  const dispatch = useDispatch();

  const userName = useSelector((state) => state.user.username);
  const submitCss =
    "bg-white text-btnColor rounded-lg my-1 h-14 p-5 text-base leading-none";
  useCheckIfUserValid();

  function handleLogout() {
    deleteCookie();
    dispatch(setUser(false));
  }

  return (
    <div className="flex flex-col text-center justify-center">
      <AccountCircleIcon sx={{ alignSelf: "center" }} />
      <p>{userName}</p>
      <button onClick={handleLogout} className={submitCss}>
        LogOut
      </button>
    </div>
  );
};

export default MyAccount;
