import React, {useState} from "react"


function ArrayOfObjectComponent(){

    const [cars, setCars] = useState([]);
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake, setMake] = useState("");
    const [carName, setName] = useState("");

   
    

    function handleCars(){
        const newCar = {year:carYear,
                        name: carName,
                        make: carMake
                       }

        setCars(c =>[...c, newCar])  
        
        setYear(new Date().getFullYear())
        setMake("")
        setName("")

    }

    function handleYear(event){
        setYear(event.target.value)
    }

    function handleMake(event){
        setMake(event.target.value)
    }

    function handleName(event){
        setName(event.target.value)
    }

    function removeCar(index){
        setCars(c => c.filter((_, i) =>  i != index))
              // ^ updater function

    //  setCars(cars.filter((_, i) =>  i != index))
    //        // ^ method to upadte current state     

    }





    return(<div>

           <h1>List Of Cars</h1>
           <ul>
               {cars.map((car, index) => <li id="list-items" onClick={()=>removeCar(index)} key={index}>{car.year} {car.make} {car.name}</li>)}
           </ul>

           <input type="number" value={carYear} onChange={handleYear} /><br/>
           <input type="text" value={carMake} placeholder="Add car Make" onChange={handleMake} /><br/>
           <input type="text"  value={carName}placeholder="Add car name" onChange={handleName} /><br/>
           <button onClick={handleCars}>ADD CAR</button>

           </div>
    )

}

export default ArrayOfObjectComponent