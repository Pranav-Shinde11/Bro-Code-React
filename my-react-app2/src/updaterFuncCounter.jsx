
import react , {useState} from 'react'


function UpdaterFuncCounter(){
   
    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }

    const decrement = () =>{
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    }

    const reset = () => {
        setCount(c => c = 0)
    }


    return(<div className='counter-box'>
           
            <p className='count'>{count}</p>
            <button className='counter-button' onClick={decrement}> Decrement</button>
            <button className='counter-button' onClick={reset}>Reset</button>
            <button className='counter-button' onClick={increment}> Increment</button>
            
           </div>
     )


}

export default UpdaterFuncCounter