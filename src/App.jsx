import React from 'react'
import Navbar from './components/Search_navbar'
import Grid from './components/Grid'
import Tab from './components/Tab'
import Home from './pages/Home'
import Saved from './pages/Saved'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleTheme } from './redux/features/themeSlice'

const App = () => {
  const darkMode = useSelector((state) => state.theme.mode) === "dark";
  const dispatch = useDispatch();

  return (
    <div className={`dark min-h-screen transition-colors duration-500 ${darkMode ? "bg-[#0f0f0f] text-white" : "bg-[#fdfcfc] text-gray-900"}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </div>
  )
}

export default App