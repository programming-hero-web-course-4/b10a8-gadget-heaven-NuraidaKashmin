import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>
      <div className=''>
        {/* Dynamic Sections */}
        <Outlet/>
      </div>
      {/* Footer */}
      {/* <Footer></Footer> */}
      

    </>
  )
}

export default App
