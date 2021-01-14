import React from 'react'
import logo from '../../src/Icon.svg'

const NavBar = ()=>{
  return (
    <div className="text-gray-600 h-16 flex items-center mx-24 justify-between ">
      <div className="flex h-full">
        <div className="mx-4 flex items-center">
          <svg className="fill-current text-blue-500" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="7" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8527 5.56466L18.2339 9.46563L20.0736 12.2632L28 9.0486V10.7146L18.4079 14.6047L20.2476 17.4023L28 14.2583V15.9245L18.5822 19.7439L20.4219 22.5415L28 19.4682V21C28 24.866 24.866 28 21 28H7C3.13401 28 0 24.866 0 21V7C0 3.13401 3.13401 0 7 0H21C24.374 0 27.1905 2.38715 27.8527 5.56466Z" />
          </svg>
          <button className="focus:outline-none px-2 font-bold text-2xl text-blue-500">just todo it!</button>
        </div>
        <div className="h-full flex text-md font-light justify-between items-center">
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
