import React, {useState} from "react";


function UpdateArrayComponent(){

    const[fruits, setFruit] = useState(["Mango", "Banana", "Orange"]);


    function HandleAddFruit(){

        const newFruit = document.getElementById("fruitInput").value;
        document.getElementById("fruitInput").value="";

        setFruit((f)=>[...f,newFruit])

    }

    function HandelRemoveFruit(index){
        setFruit(fruits.filter((_, i) => i != index))
    }



    return(<div>
            
            <h1>Fruit List</h1>
            <ul>
                {fruits.map((fruit, index)=> <li id="list-items" onClick={()=>HandelRemoveFruit(index)} key={index}>{fruit}</li>)}
            </ul>

            <input type="text" id="fruitInput" placeholder="Add fruit to list" />
            <button onClick={HandleAddFruit}>ADD </button>


           </div>

    )



}

export default UpdateArrayComponent;