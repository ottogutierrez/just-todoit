import React from 'react'
import AppIcon from './AppIcon'

const NavBar = ()=>{
  return (
    <div className="text-gray-600 h-16 px-24 flex items-center justify-between ">
      <div className="flex h-full">
        <div className="h-full px-4 flex items-center">
          <button className="invisible md:visible focus:outline-none px-2 font-bold text-2xl text-blue-500">just todo it!</button>
        </div>
        <div className="invisible sm:visible h-full flex text-md font-light justify-between items-center">
          <button className="focus:outline-none border-b-2 border-transparent px-3 h-full hover:bg-blue-100 hover:border-blue-900">Features</button>
          <button className="focus:outline-none border-b-2 border-transparent px-3 h-full hover:bg-blue-100 hover:border-blue-900">Resources</button>
        </div>
      </div>
      <nav className=" h-full flex items-center">
        <button className="focus:outline-none border-b-2 border-transparent px-3 h-full hover:bg-blue-100 hover:border-blue-900">Login</button>
        <button className="focus:outline-none border-b-2 border-transparent px-3 h-full hover:bg-blue-100 hover:border-blue-900 text-blue-500">Signup</button>
      </nav>
    </div>
  )
}

export default NavBar
