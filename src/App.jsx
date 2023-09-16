import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
