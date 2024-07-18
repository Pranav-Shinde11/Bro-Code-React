import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Food from './components/food'


import Card from './components/card'
import Button from './components/Button'
import Student from './components/Student'
import WelcomeGreeting from './components/Welcome'
import Renderlist from './components/Renderlist'


function App() {

  const students = [{id:1, name:"Pranav", marks:"sadf"}, 
                    {id:2, name:"Omkar", marks:88}, 
                    {id:3, name:"Saurabh", marks:66},
                    {id:4, name:"Sahil", marks: 55},
                    {id:5, name:"Peter", marks: 99},
                    {id:6, name:"Krushna", marks:110}]

  const fruits = [{id:7, name:"Mango", cal:707}, 
                    {id:8, name:"Apple", cal:808}, 
                    {id:9, name:"Gava", cal:606},
                    {id:10, name:"Orange", cal: 550},
                    {id:11, name:"Banana", cal: 909},
                    {id:12, name:"Strawberry", cal:100}]


  return(
    <>
       {/* <Header/>
       <Footer/>
       <Food/> */}
       {/* <Card/> */}

       {/* <Button/> */}

       {/* <Student  name = "123" age={22} isstudent={true} />
       <Student  name = "Saurabh" age={22} isstudent={false} />
       <Student  name = "Omkar" age={23} isstudent={true} />
       <Student name = "Sahil" /> */}

       {/* <WelcomeGreeting    isloggedin={true} username="Pranav"/> */}

       
       {students.length > 0 ? <Renderlist  items ={students} category="000"/> : null }    
       {fruits.length > 0 &&   <Renderlist  items ={fruits}  category="fruits"/> }
       {/* // we can apply conditining both way */}

       {/* <Renderlist  items ={fruits}  category="fruits"/> */}

       
    </>
    
  );
}

export default App
