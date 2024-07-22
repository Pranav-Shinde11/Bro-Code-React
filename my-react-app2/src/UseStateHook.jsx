import React ,{ useState } from "react"


function Mycomponent(){
    
      const [name, setName] = useState("None");                   //usestate function return two element > stateful variable and setter function
      const [age, setAge] = useState(0);
      const [isemployed, setisemployed] = useState(false)



      const DisplayName = () =>{
        setName("Pranav")                                 //when you use the setter function of the stateful variable it will trigger a rerendered virtual DOM
        console.log(name)
      }
       
      const DisplayAge = () =>{
        setAge(age + 1)                                 
      }

      const AddStatus = () =>{
        setisemployed(!isemployed)                                 
      }





   return(<>
          <div>
             <p>Name: {name}</p>
             <button onClick={DisplayName}>Add Name</button>   
         </div>

         <div>
             <p>Age: {age}</p>
             <button onClick={DisplayAge}>Set Age</button>   
         </div>

         <div>
             <p>Employment Status: {isemployed ? "Yes" : "No"}</p>
             <button onClick={AddStatus}>Set Status</button>   
         </div>
   
         </>);
}

export default Mycomponent