import React, {useContext} from "react"
import { UserContext } from "./compA"

import ComponentD from "./compD"


function ComponentC(){

     const user = useContext(UserContext); 
   
    return (
        <div className="box" >
        <h2>C</h2>
        <ComponentD />
        {/* <p>{`${props.user}`}</p> */}
        <h2>{`hello again ${user}`}</h2>
        </div>
    )

}

export default ComponentC