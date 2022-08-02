import { useNavigate } from "react-router"
import Login from './Components/Register'
import Landing from "./Components/Landing";
import "./index.css"
import "./newthing.scss"
export default function ButtonRE(props){
    const navigate = useNavigate();
    return(
        <div>
            <Landing />
            <button className = "button1"onClick={()=>navigate('/user/Login')}>Click this to get started or Sign in</button>
        </div>
    )
}