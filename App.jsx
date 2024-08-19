import React from 'react'
import Header from './src/components/Header';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <div className='app'>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default App

