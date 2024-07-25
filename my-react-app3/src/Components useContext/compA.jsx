import React, {useState, createContext} from "react"
import ComponentB from "./compB";

export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("Pranav");

    return (
        <div className="box" >
        <h2>A</h2>
        <p>{`hello ${user}`}</p>
        <UserContext.Provider value={user}>
        <ComponentB user = {user}/>
        </UserContext.Provider>
        
        </div>
    )

}

export default ComponentA