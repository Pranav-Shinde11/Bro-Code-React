import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponent from './UseStateHook'
import Counter from './counter'
import Onchange from './OnChange'
import Colorpicker from './colorpicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Mycomponent/> */}
      {/* <Counter/> */}
      {/* <Onchange/> */}
      <Colorpicker/>

    </>
  )
}

export default App
