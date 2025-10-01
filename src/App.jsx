import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Orders from "./pages/Orders.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </>
  )
}

export default App
