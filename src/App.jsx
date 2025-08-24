import React from 'react'
import AiPage from './components/AiPage';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Landing />}/>
     <Route path="/ai" element={<AiPage />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
