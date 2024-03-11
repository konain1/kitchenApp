import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Addexpense } from "./Addexpense"; // Import your Add Expense component

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [redirectTo, setRedirectTo] = useState(null);
  const [userData, SetUserData] = useState({});

  const navigate = useNavigate(); // Initialize useNavigate hook

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
      SetUserData(foundUser);
      navigate("/add"); // Redirect to add expense page
    } else {
      console.log("User not found");
    }
  }

  // Redirect if redirectTo is set
  if (redirectTo) {
    return <Redirect to={redirectTo} />; // Removed due to React Router v6 changes
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
