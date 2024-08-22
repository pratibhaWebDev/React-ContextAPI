import React, {useState,useContext}from 'react'
import UserContext from '../context/UserContext'


const Login = () => {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)
    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({name,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input 
        type="text"
        onChange={(e)=>setName(e.target.value)}
        value={name} />
        {" "}
        <input 
        type="text"
        onChange={(e)=>setPassword(e.target.value)}
        value={password} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login