import {useState} from 'react'
import{createRef} from 'react'
import React from 'react'
const userNameID=createRef()
const nameID = createRef()
const address =createRef()
const age = createRef()
const password =createRef()
export default function Createuser(){
    const [result,setResult]= useState()
    const userCreate =()=>{
      console.log(result)
        fetch('http://localhost:3000/user/add?username='+userNameID.current.value+'&name='+nameID.current.value+'&age='+age.current.value +'&address=' + address.current.value+'&password='+password.current.value)
        .then(data=>data.json())
        .then(data=>setResult(data))
    }
    return(
        <div id="create-use">
        <h3 className="create-use">Create a User:</h3>
        <label htmlFor="username" >
          <input type="text" name="username" placeholder="username" id="username" ref={userNameID} />
        </label><br /><br /><br />
        <label htmlFor="name">
          <input type="text" placeholder="name" name="name" id="name" ref={nameID} />
        </label><br /><br /><br />
        <label htmlFor="age">
          <input type="text" placeholder="age" name="age" id="age" ref={age}/>
        </label><br /><br /><br />
        <label htmlFor="address">
          <input type="text" placeholder="address" name="address" id="address" ref={address} />
        </label><br /><br /><br />
        <input type="text" placeholder="password" name="password" id="password" ref={password} />
        <br /><br /><br />
        <button onClick={userCreate} className="button2">Add User</button> <br />
      </div>
    )
}

