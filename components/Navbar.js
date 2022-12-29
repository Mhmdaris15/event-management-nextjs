import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="w-full md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
                <div>
                  <Link href="/" className="inline-block py-2 text-gray-200 text-2xl font-bold">Stats.</Link>
                </div>
                <div>
                  <div className="hidden md:block">
                    <Link href="/home" className="inline-block py-1 md:py-4 text-gray-200 mr-6 font-bold">Home</Link>
                    <Link href="/events" className="inline-block py-1 md:py-4 text-gray-100 hover:text-gray-200 mr-6">Events</Link>
                    <Link href="/about-us" className="inline-block py-1 md:py-4 text-gray-100 hover:text-gray-200 mr-6">About Us</Link>
                  </div>
                </div>
                <div className="hidden md:block">
                  <Link href="/" className="inline-block py-1 md:py-4 text-gray-100 hover:text-gray-300 mr-6">Login</Link>
                  <Link href="/" className="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg">Start a free trial</Link>
                </div>
              </div>
  )
}

export default Navbar