import { useState } from 'react'
import './App.css'
import MyNav from './MyNav'
import Landing from './Landing'
import Quran from './Quran'
import { BrowserRouter,Routes, Route  } from "react-router";
import Slah from './Slah';
import Azkar from './Azkar'
import Radio from './Radio'
import Footer from './Footer'
import { useSelector } from 'react-redux'
function App() {
  const theme = useSelector(state => state.darkModeReducer.theme)
  return (
    <BrowserRouter>
    <div className={`app ${theme}`}>
      <MyNav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/slah" element={<Slah />} />
        <Route path="/azkar" element={<Azkar />} />
        <Route path="/radio" element={<Radio />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
