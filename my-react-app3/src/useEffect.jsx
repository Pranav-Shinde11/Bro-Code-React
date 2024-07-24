import { useState,useEffect } from "react";


function UseEffectComponent(){

    const [width, setWidth] = useState(window.innerWidth);
    const [heigth, setHeigth] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize" , handleresize);
        console.log("called");

        return()=>{
            window.removeEventListener("resize" , handleresize);
             console.log("removed");
        }

    },[])

       useEffect(()=>{
        document.title=`title: ${width}-${heigth}`
       },[width,heigth])
  

     function handleresize(){
        setWidth(window.innerWidth);
        setHeigth(window.innerHeight);
     }

    return(
        <>
        <p>Window Width: {width}px</p>
        <p>Window Heigth: {heigth}px</p>
        </>
    )

 
       






























    // const [count , setCount] = useState(0);
    // const [color, setColor] = useState("green")

    // useEffect(()=>{
    //     document.title = `count : ${count} ${color}` //use this => useEffect(function) to update something everytime we rerender and for mount only once we can use => useEffect(function, [])
    // }, [count])




    // function addcount(){
    //     setCount(c => c + 1);
    // }
    // function substractcount(){
    //     setCount(c => c - 1);
    // }
    // function changecolor(){
    //     setColor(c => c === "green" ? "red" : "green");
    // }


    // return(
    //     <>
    //     <p style={{color: color}}>Count: {count}</p>
    //     <button onClick={addcount}>Add</button>
    //     <button onClick={substractcount}>substract</button><br/>
    //     <button onClick={changecolor}>change color</button>

    //     </>
    // )
  
}

export default UseEffectComponent