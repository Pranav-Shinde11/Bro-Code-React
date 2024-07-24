import React , {useState} from "react"



function ToDoComponent(){

    const [tasks, setTasks] = useState(['adfadf','adfadfdaf','adfadf']);
    const [newTask, setnewtask] = useState();


    function handleinput(event){
        setnewtask(event.target.value)

    }
    function handleaddtask(){
        setTasks(t => [...t, newTask])
        setnewtask("")
    }
    function handledeletetask(index){
         setTasks(tasks.filter((_, i)=> i!== index ))
        
    }
    function handleup(index){
      if(index >0){
        const updatedtask = [...tasks];
        [updatedtask[index], updatedtask[index-1]] = [updatedtask[index -1], updatedtask[index]]
        setTasks(updatedtask)
      }
        
        
    }
    function handledown(index){

        if(index < tasks.length -1){
            const updatedtask = [...tasks];
            [updatedtask[index], updatedtask[index + 1]] = [updatedtask[index + 1], updatedtask[index]]
            setTasks(updatedtask)
          }
        
    }

     

    return(<div className="to-do-list">
           <h1>To Do List 📜</h1>

           <div>
            <input type="text" value={newTask} placeholder="Enter task here ..." onChange={handleinput}/>
            <button className="add-button" onClick={handleaddtask} >ADD</button>
           </div>

           <ol>
            {tasks.map((task, index) => <li key={index}>
                                            <span className="text">{task} </span>
                                            <button className="delete-button" onClick={()=>handledeletetask(index)}>❌</button>
                                            <button className="move-button" onClick={()=>handleup(index)}>⬆️</button>
                                            <button className="move-button" onClick={()=>handledown(index)}>⬇️</button>
                                        </li>)}
           </ol>




          </div>

    )





}

export default ToDoComponent