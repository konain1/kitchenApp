import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Addexpense } from "./Addexpense"; // Import your Add Expense component
import UserContext from "../context/UserContext";
import Input from "./Input";


export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [redirectTo, setRedirectTo] = useState(null);
  const [userData, SetUserData] = useState({});
  const contextObj = useContext(UserContext)
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
      
      contextObj.setUserOBJ(foundUser)

      // SetUserData(foundUser._id);

      navigate("/add")

    } else {
      console.log("User not found");
    }
  }

  return (
    <div className=" w-full flex  md:flex flex-col justify-center items-center border border-black  ">
    
    <div className=" mt-10 w-[300px] text-white h-[400px] md:w-[1240px] md:h-[540px] border
     border-black flex flex-col justify-center  rounded items-center 
    text-[18px] md:text-[30px] bg-[#911d91]">
    
    <label>User email</label>
      {/* <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@gmail.com"
        required
        className=" border border-black px-3 my-5 text-black "
      /> */}
      <br></br>
     
      <Input type={'email'} set={setEmail} />
      <br />
      <label>Password</label>
    <Input type={'password'} set={setPassword} />
      <button className="bg-black px-10 shadow-xl active:scale-95 duration-500 " onClick={userExists}>Login</button>

    </div>
      
    </div>
  );
}
