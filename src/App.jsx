import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pageComponents/Header'
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import SellNow from './pages/SellNow.jsx'
import Footer from './pages/Footer.jsx'

function App() {

  return (
    <>
      <Router>
        <Header />
        <main className="">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/sell-now" element={<SellNow />} />
            <Route path="/about-us" element={<div>About Us Page</div>} />
            <Route path="/blog" element={<div>Blog Page</div>} />
            <Route path="/contact-us" element={<div>Contact Us Page</div>} />
            <Route path="/faq" element={<div>FAQ Page</div>} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
