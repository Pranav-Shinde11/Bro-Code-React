import React, {useState} from "react"


function UpdateObject(){

    const [car, setCar] = useState({name:"Velar", make: "land-rover", year: 2020});

    function handleyear(event){
        // setCar({Year:2023})          while updating the any attribute in the car details, we want prevous attribute of the model to be retianed, we know to handle previous state we use the updater function                  
        setCar(car => ({...car, year: event.target.value}));       //...car , we use this to spread current object and then we replace the propeties in this , reason behinde it is mentioned in above line 
    }

    function handlmake(){
        setCar(car => ({...car, make: event.target.value}));
    }

    function handlname(){
        setCar(car => ({...car, name: event.target.value}));      
    }
    



    return(<div>
        <p>Car Details : {car.name} the Product of {car.make} Since {car.year}</p>
        <p>{car.year} | {car.make} | {car.name}</p>

        <input type="number" value={car.year} onChange={handleyear}/>
        <input type="text" value={car.make} onChange={handlmake}/>
        <input type="text" value={car.name} onChange={handlname}/>
    </div>

    )


}

export default UpdateObject