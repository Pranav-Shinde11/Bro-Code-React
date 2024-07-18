


function Renderlist(props){
     
    const category = props.category
    const itemlist = props.items

    const listitems = itemlist.map(item => <li key ={item.id}>{item.name}: &nbsp;<b>{item.marks}{item.cal}</b> </li>)





//above code is written for the list availabel in the app/ parent component, to see the execution of the reusable list

// string sorting methods

    // return students
// students.sort((a, b) => a.name.localeCompare(b.name))  //aplabetical
// students.sort((a, b) => b.name.localeCompare(a.name))  // reverse aplabetical
// students.sort((a, b) => a.marks - b.marks)  //numerical
// students.sort((a, b) => b.marks - a.marks)  //reverse numerical


// below code is written for the list avaible in the same component

    // const lowscorestds = students.filter(student => student.marks < 70)
    // const lowscorestdls = lowscorestds.map(lowscorestd => <li key ={lowscorestd.id}> {lowscorestd.name}: &nbsp;<b>{lowscorestd.marks}</b> </li>)

    // const highscorestds = students.filter(student => student.marks > 70)
    // const highscorestdsls = highscorestds.map(highscorestd => <li key ={highscorestd.id}> {highscorestd.name}: &nbsp;<b>{highscorestd.marks}</b> </li>)

    // const itemls = students.map(student => <li key ={student.id}>{student.name}: &nbsp;<b>{student.marks}</b> </li>)

    return (<>
              <h3 className="item-category">{category}</h3>
              <ol className="list-item">{listitems}</ol>
            </>)

}


export default Renderlist
