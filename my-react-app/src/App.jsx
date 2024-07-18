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


function App() {
  return(
    <>
       {/* <Header/>
       <Footer/>
       <Food/> */}
       {/* <Card/> */}

       {/* <Button/> */}

       <Student  name = "123" age={22} isstudent={true} />
       <Student  name = "Saurabh" age={22} isstudent={false} />
       <Student  name = "Omkar" age={23} isstudent={true} />
       <Student name = "Sahil" />

       
    </>
    
  );
}

export default App
