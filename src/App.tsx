import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='min-h-[80vh] bg-mydrugs-dark'>
        <Routes>
          <Route path="/" element={<div className="text-white p-10 text-center">
            <h1 className="text-5xl font-bold text-mydrugs-neon underline">
  Teste Tailwind v4
</h1>
          </div>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App