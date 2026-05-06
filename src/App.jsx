import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'


function App() {

  return (
<BrowserRouter>

   <Navbar/>

   <Routes>     
        <Route path='/' element={<Home></Home>}/>
        <Route path='/movie/:id' element={<MovieDetail> </MovieDetail>}/>
   </Routes>





   
  

   

	
</BrowserRouter>
  )
}

export default App
