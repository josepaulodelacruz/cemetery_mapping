import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CemeteryMap from './pages/map'
import ViewDetails from './pages/view'
import { Button, Modal } from 'antd';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<CemeteryMap/>} />
        <Route path='/view' element={<ViewDetails/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}



export default App
