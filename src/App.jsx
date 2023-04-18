import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBar/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
