import { useEffect, useState } from "react";
// import { useHistory } from 'react-router-dom';






export function Signup() {


    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users,setUsers] = useState()
    const [loginButton,setLoginButton] = useState(false)
    // const history = useHistory();   

    useEffect(()=>{

        fetch('http://localhost:3001/users').then(async(data)=>{
            let json = await data.json();
            setUsers(json.users)
        })
    },[])


    // if (!users) {
    //     // Handle the case where users is null (e.g., wait for users to be fetched)
    //     fetch('http://localhost:3001/users').then(async(data)=>{
    //         let json = await data.json();

    //         setUsers(json.users)
    //     })
    //     return
    // }

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
                setLoginButton(true)
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
                        {loginButton?<button>Login</button> : ' '}
                </div>
            </div>
        </>
    );
}
