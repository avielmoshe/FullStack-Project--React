import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector, useDispatch } from "react-redux";
import { deleteCookie } from '../utils/userApi';


const MyAccount = ()=>{
    const userName = useSelector((state) => state.user.username);
    const submitCss =  "bg-white text-btnColor rounded-lg my-1 h-14 p-5 text-base leading-none";

    return(
        <>
        <AccountCircleIcon/>
        <p>{userName}</p>
        <button onClick={deleteCookie} className={submitCss}>LogOut</button>
        </>
    )

}

export default MyAccount