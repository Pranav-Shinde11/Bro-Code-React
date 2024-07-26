import React ,{useState, useEffect, useRef} from "react";



function UseRefComponent(){

    // const [number, setNumber] = useState(0);
    // const ref = useRef(0);                           // use ref return the object has one property current,if you pass the value to ref function you can set the value of current
    

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    // console.log(inputRef)
  
    useEffect(()=> 
       { console.log("COMPONENT RERENDERED");
        // console.log(inputRef)

})


    function handleClick1(){
        // setNumber(n => n +1);

        // ref.current++;
        // console.log(ref.current)

        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";

    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "";
    }
    

    return(<div>
          <button onClick={handleClick1}>Click Me!</button>
          <input ref={inputRef1}/><br/>

          <button onClick={handleClick2}>Click Me!</button>
          <input ref={inputRef2}/><br/>

          <button onClick={handleClick3}>Click Me!</button>
          <input ref={inputRef3}/><br/>

    </div>)

}

export default UseRefComponent