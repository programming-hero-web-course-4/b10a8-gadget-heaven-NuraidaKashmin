import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Toaster></Toaster>
      {/* Navbar */}
      <Navbar></Navbar>
      <div className=''>
        {/* Dynamic Sections */}
        <Outlet/>
      </div>
      {/* Footer */}
      <Footer></Footer>
      

    </>
  )
}

export default App
