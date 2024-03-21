import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import "./Addexpense.css";
import UserContext from "../context/UserContext";



export function Addexpense() {


  const [user, setUser] = useState({});
  const { userId } = useParams(); // Access userId from URL params

  const userDetailsContext = useContext(UserContext)
 
  // Fetch user data based on the received userId (if available)
  useEffect(() => {
    if (userId) {
        console.log("Received userId:", userId);
        fetch(`http://localhost:3001/users/${userId}`) // Fetch user by ID
            .then(async (data) => {
                if (!data.ok) {
                    throw new Error("Failed to fetch user data");
                }
                const json = await data.json();
                if (json.length > 0) { // Check if user exists in response
                    setUser(json[0]); // Set user data (assuming first element)
                } else {
                    console.log("User with ID", userId, "not found");
                }
            })
            .catch((error) => console.error("Error fetching user:", error));
    } else {
        console.log("userId not received yet");
    }
}, [userId]);


  // ... rest of your Addexpense component logic ...

  return (
    <>
      <div>
        <h1>
          Welcome ! <span style={{ backgroundColor: "lightcyan", color: "red" }}>
          {userDetailsContext.userOBJ.username}
          </span>{" "}
          and Your _id is {" "}
          <span style={{ backgroundColor: "lightcyan", color: "red", fontSize: "12px" }}>
            {userDetailsContext.userOBJ._id}
          </span>
        </h1>

        <div className="container">
          <div className="formDiv">
            <form >
              <label>Goods</label>:
              <input
                type="text"
                placeholder="Example : rice,water,etc"
                name="Goods"
              />
              <br />
              <label>Cost</label>:
              <input type="number" placeholder="ex : 180" name="cost" />
              <br />
              {/* Optionally pre-fill the user ID field if userId is available */}
              <label>_id</label>:
              <input
                type="text"
                placeholder=""
                name="userID"
                value={userDetailsContext.userOBJ._id|| ""} // Pre-fill with userId if available
              />
              <br />
              <button>Add Expenses</button>
            </form>
          </div>

          <div className="totalDiv">
            <h2>Total : 1232</h2>
          </div>
        </div>
      </div>
    </>
  );
}
