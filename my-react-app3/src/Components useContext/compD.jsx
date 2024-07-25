import React, {useContext} from "react"
import { UserContext } from "./compA"



function ComponentD(props){

    const user = useContext(UserContext)

    return (
        <div className="box" >
        <h2>D</h2>
         <p>{`Bye ${user}`}</p>
        </div>
    )

}

export default ComponentD