
import { useEffect, useState } from "react"
import "./Addexpense.css"


export function Addexpense(){

    const [user,setUser] = useState({})
    useEffect(()=>{
        fetch('http://localhost:3001/users').then(async function(data){
        let json = await data.json();
        setUser(json.users[0])
        })  
    },[])
    return(<>
        <div >

            <h1>Welcome User you're Email is <span style={{backgroundColor:'lightcyan' , color:"red"}}> {user.email} </span> 
              and _id <span style={{backgroundColor:'lightcyan' , color:"red" , fontSize:'12px'}}> {user._id} </span></h1>
            <div className="container">
                
           
            <div className="formDiv">
            <form >
                <label>Goods</label>: 
                <input type="text" placeholder="Example : rice,water,etc" name="Goods"></input>
                <br></br>
                <label>Cost</label>: 
                <input type="number" placeholder="ex : 180" name="cost"></input>
                <br></br>
                <label>_id</label>: 
                <input type="text" placeholder="" name="userID" value={user._id}></input>
                <br></br>
                <button>Add Expenses</button>

            </form>
            </div>

            <div className="totalDiv">
            <h2>Total : 1232</h2>

            </div>
            </div>
            
        </div>
    </>)
}