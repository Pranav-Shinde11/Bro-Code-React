import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffectComponent from './useEffect'
import ComponentA from './Components useContext/compA'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UseEffectComponent/> */}
      <ComponentA/>
    </>
  )
}

export default App
