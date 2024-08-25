import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="overflow-x-hidden  text-neutral-300 antialiased selection: bg-cyan-300  selection: text-cyan-950">
      <div className='flixed top-0 -z-1- h-full w-full'></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
    <Navbar/>

    </div>
  )
}

export default App
