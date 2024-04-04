import { useEffect, useState } from "react";
import { Login } from "./Login";
import Input from "./Input";
import { Navigate, useNavigate } from "react-router-dom";
export function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                return response.json();
            })
            .then(data => setUsers(data.users))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    function signupHandler() {
        if (users.some(user => user.username === username || user.email === email)) {
            alert('User already exists');
        } else {
            fetch('http://localhost:3001/signup', {
                method: "POST",
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to sign up');
                    }
                    return response.json();
                })
                .then(data => {
                    alert('Signed up');
                    
                    navigate('/')
                })
                .catch(error => console.error('Error signing up:', error));
        }
    }

    return (
        <>

        <div>
        
            <div className="flex p-10 m-10 flex-col">
                <label className="mx-3">Username</label>
                {/* <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} /> */}
                <Input type={'text'} set={setUsername} />
                <br />
                <label className="mx-3">Email</label>
                {/* <input type="email" name="email" onChange={( e) => setEmail(e.target.value)} /> */}
                <Input type={'email'} set={setEmail}  />
                <br />
                <label className="mx-3">Password</label>
                {/* <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} /> */}
                <Input type={'password'} set={setPassword} />
                <br></br>
                <button className="bg-black px-10 shadow-xl py-2 active:scale-95 duration-500 text-white " type="submit" onClick={signupHandler}>Signup</button>
                {/* {loginButton && <button>Login</button>}  */}
            </div> 
        
            
            
        </div>
        </>
    );
}
