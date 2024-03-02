import { useEffect, useState } from "react";

export function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users,setUsers] = useState()


    useEffect(()=>{

        fetch('http://localhost:3001/users').then(async(data)=>{
            let json = await data.json();

            setUsers(json.users)
        })
    },[])
    function signupHandler() {
        let userExists = false;
        users.forEach((user) => {
            if (user.username === username || user.email == email ) {
                userExists = true;
                alert('User already exists');
            }
        });
    
        if (!userExists) {
            // Proceed with signup logic
            fetch('http://localhost:3001/signup',{
                method:"POST",
                  body:JSON.stringify({
                    username:username,
                    email:email,
                    password:password
                  }),
                  headers:{
                    "content-type":"application/json"
                  }
              }).then(async(data)=>{
                let datas = await data.json()
                alert('signed up')
                
              })
        }
    }
    
    return (
        <>
            <div>
                <h1>Signup</h1>
                <div>
                        
                        <label>Username</label>
                        <input type="text" name="username" onChange={(e) => setUsername(e.target.value)}></input>
                        <br></br>
                        <label>Email</label>
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}></input>
                        <br></br>
                        <label>Password</label>
                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
                        <button type="submit" onClick={signupHandler}>signup</button>
                      
                </div>
            </div>
        </>
    );
}
