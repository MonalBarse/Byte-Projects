import { useState } from 'react'
import './App.css'
import { Route , Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Routes>
    <Route path="/" Component={Homepage} />
    {/* <Route path="/chats" ></Route> */}
    </Routes>
   </div >
  )
}

export default App
