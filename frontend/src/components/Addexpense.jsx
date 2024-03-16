import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import "./Addexpense.css";

export function Addexpense() {
  const [user, setUser] = useState({});
  const { userId } = useParams(); // Access userId from URL params

  // Fetch user data based on the received userId (if available)
  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:3001/users/${userId}`) // Fetch user by ID
        .then(async (data) => {
          if (!data.ok) {
            throw new Error("Failed to fetch user data");
          }
          let json = await data.json();

         const userExists =  json.find((user)=> user._id = userId)
         console.log(userExists)
          setUser(json);
        })
        .catch((error) => console.error("Error fetching user:", error));
    }
  }, [userId]); // Re-run useEffect when userId changes

  // ... rest of your Addexpense component logic ...

  return (
    <>
      <div>
        <h1>
          Welcome User! Your Email is{user.email}
          <span style={{ backgroundColor: "lightcyan", color: "red" }}>
            {user.email}
          </span>{" "}
          and _id{" "}
          <span style={{ backgroundColor: "lightcyan", color: "red", fontSize: "12px" }}>
            {user._id}
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
                value={userId || ""} // Pre-fill with userId if available
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
