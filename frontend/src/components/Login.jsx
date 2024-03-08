import { useState,useEffect } from "react";

export function Login(){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [users,SetUsers] = useState([])

    // useEffect(()=>{
    //     fetch('http://localhost:3001/login',{
    //         method:"POST",
    //         body:JSON.stringify({
    //             email:email,
    //             password:password
    //         }),
    //         headers:{
    //             "content-type":"application/json"
    //         }
    //     }).then(async function(data){
    //     let json = await data.json();
    //     setUserid(json.users[0]._id)
    //     })  
    // },[])

    useEffect(()=>{
        fetch('http://localhost:3001/users').then(async function(data){
        let json = await data.json();
        SetUsers(json.users)
    })  
},[])

function userExist(){
    users.forEach((i)=>{
        if(i.email == email && i.password == password){
            console.log(i.username)
        }
       
    })
}
console.log(users)
    return <>
        <div>
            <label>User email</label>
          
            <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="example@gmail.com" required></input>
            <br></br>
            <label>Password</label>
            <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password"></input>

            <br></br>
            <button onClick={userExist} type="submit">Login</button>

        </div>
    </>
}