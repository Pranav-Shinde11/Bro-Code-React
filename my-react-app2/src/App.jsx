import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponent from './UseStateHook'
import Counter from './counter'
import Onchange from './OnChange'
import Colorpicker from './colorpicker'
import UpdaterFuncCounter from './updaterFuncCounter'
import UpdateObject from './updateObject'
import UpdateArrayComponent from './updateArray'
import ArrayOfObjectComponent from './updateArrayOfObject'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Mycomponent/> */}
      {/* <Counter/> */}
      {/* <Onchange/> */}
      {/* <Colorpicker/> */}
      {/* <UpdaterFuncCounter/> */}
      {/* < UpdateObject/> */}
      {/* <UpdateArrayComponent/> */}
      <ArrayOfObjectComponent/>

    </>
  )
}

export default App
