import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Loader2 } from 'lucide-react'
const Home = lazy(() => import("./pages/Home"))
const PropertyDetails = lazy(() => import("./components/PropertyDetails"))

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className='min-h-screen flex items-center justify-center'><Loader2 className='size-16 animate-spin text-blue-500' /></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
