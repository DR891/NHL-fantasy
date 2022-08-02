import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonRE from "./ButtonRE"
import Register from './Components/Register'
import Landing from './Components/Landing';
import Login from './Components/Login'
import {useState} from 'react'
import Homepage from "./Components/Homepage"
export default function App() {
  const [user,setLoginUser] = useState({
  })
  
  return(
      <div className="App">
        <Router>
          <Routes>
            <Route path ="/" element={<ButtonRE />} />
            <Route exact path ="/" element={<Landing />} />
            <Route  exact path ="/user/add" element ={<Register />}/>// if file path is login return element
            <Route path ="user/Login" element ={<Login />}/>
            <Route exact path="/user/Login/Homepage" element={<Homepage />}/>
          </Routes>
        </Router>
      </div>
    )
  };


