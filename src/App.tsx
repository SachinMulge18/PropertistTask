import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PropertyDetails from './components/PropertyDetails'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </>
  )
}

export default App
