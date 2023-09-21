import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Layout from './Layout'
import About from './pages/About'
import Careers from './pages/Careers'
import Events from './pages/Events'
import Products from './pages/Products'
import Support from './pages/Support'
import Content from './components/Content'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>} />
         { <Route path="/home" element={<Home/>} />}
          <Route path='about' element={<About/>}></Route>
          <Route path='careers' element={<Careers/>}></Route>
          <Route path='events' element={<Events/>}></Route>
          <Route path='products' element={<Products/>}></Route>
          <Route path='support' element={<Support/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
