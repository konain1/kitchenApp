import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Addexpense } from "./Addexpense"; // Import your Add Expense component
import UserContext from "../context/UserContext";
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [redirectTo, setRedirectTo] = useState(null);
  const [userData, SetUserData] = useState({});
  const contextObj = useContext(UserContext)
  const navigate = useNavigate(); // Initialize useNavigate hook

  console.log(contextObj)

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => setUsers(data.users))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  function userExists() {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      console.log(foundUser)
        contextObj.setUserOBJ(foundUser)
      SetUserData(foundUser._id);
      navigate("/add")
    } else {
      console.log("User not found");
    }
  }

  return (
    <div>
      <label>User email</label>
      <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@gmail.com"
        required
      />
      <br />
      <label>Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={userExists}>Login</button>
    </div>
  );
}
