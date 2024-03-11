import { useEffect, useState } from "react";

export function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [loginButton, setLoginButton] = useState(false);

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
                    setLoginButton(true);
                })
                .catch(error => console.error('Error signing up:', error));
        }
    }

    return (
        <div>
            <h1>Signup</h1>
            <div>
                <label>Username</label>
                <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label>Email</label>
                <input type="email" name="email" onChange={( e) => setEmail(e.target.value)} />
                <br />
                <label>Password</label>
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={signupHandler}>Signup</button>
                {loginButton && <button>Login</button>}
            </div>
        </div>
    );
}
