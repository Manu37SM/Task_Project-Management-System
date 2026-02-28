import { useState } from "react";
import api from "../api";

function Login() {

 const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")

 const login = async () => {

   const res = await api.post("/login",{
     email,
     password
   })

   localStorage.setItem("token",res.data.token);

   window.location.href="/projects";
 }

 return (
   <div>
     <h2>Login</h2>

     <input
      placeholder="email"
      onChange={e=>setEmail(e.target.value)}
     />

     <input
      placeholder="password"
      type="password"
      onChange={e=>setPassword(e.target.value)}
     />

     <button onClick={login}>Login</button>
   </div>
 )
}

export default Login
