import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import About from './pages/About'
import Header from './components/Header/Header'
import ServicesPage from './pages/ServicesPage'
import ReviewsPage from './pages/ReviewsPage'
import Work from './components/Work/Work' 
import Information from './components/Information/Information'

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        {/* пример как делать подключение страниц */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/servicespage" element={<ServicesPage />} />
        <Route path="/reviewspage" element={<ReviewsPage />} />
        <Route path="/information" element={<Information />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </>
  )
}

export default App
