import { useState } from "react"



function Colorpicker(){

    const[color, setColor] = useState("#FFFFFF")

    function handlecolorchange(event){
        setColor(event.target.value)

    }



    return(<div className="color-picker-container">

        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor: color}}>
            <p>Selected Color : {color}</p>
        </div>
            <lable>Select a Color:</lable>
            <input type = "color" value={color} onChange={handlecolorchange}/>

    </div>)


}


export default Colorpicker