
import { useEffect, useState } from "react"
import "./Addexpense.css"


export function Addexpense(){

    const [userid,setUserid] = useState()
    useEffect(()=>{
        fetch('http://localhost:3001/users').then(async function(data){
        let json = await data.json();
        setUserid(json.users[0]._id)
        })  
    },[])
    return(<>
        <div >

            <h1>Welcome User you're Email is  __  and _id __</h1>
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
                <input type="text" placeholder="" name="userID" value={userid}></input>
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