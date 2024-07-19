

function ButtonEvent(){

    let count = 0 

    const click = (name) => {
        
        if(count < 3){
            count++;
            console.log(`${name} You Touched ${count} Times`)
            return(<h3>DND {count}</h3>)
        }console.log(`${name} Stop Touching ME`)
    }




    const handleclick = (e) => e.target.textContent = "Ouch!"

    // function handleclick(e){
    //     console.log(e)
    // }





    const click2 = (name)=>{
        console.log(`${name} Do not click on me `)
    }



    // return(<button onClick={click}> touch me </button>)
    return(<button onDoubleClick={(e)=>handleclick(e)}> touch me </button>)

    // return(<button onClick={() =>click("Pranav")}> touch me </button>)

}

export default ButtonEvent