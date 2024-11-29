'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0D0B1F] shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">A</Link>
          <div className="flex gap-6">
            <Link href="/#home" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/#about" className="hover:text-blue-400 transition-colors">About</Link>
            <Link href="/#projects" className="hover:text-blue-400 transition-colors">Projects</Link>
            <Link href="/#contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

