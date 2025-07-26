import React from 'react'
import { Link } from 'react-router-dom'

const navStyles = "inline-block bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent text-[22px] transition-transform duration-300 hover:scale-110 active:scale-90"

export default function Header() {
    return(
        <header className="h-[80px]">
            <nav className="flex flex-row justify-end items-center h-full gap-12 pr-24 pt-3">
                <Link to="/" className="group relative inline-block">
                    <span className={navStyles}>Home</span>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/about" className="group relative inline-block">
                    <span className={navStyles}>About</span>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/skills" className="group relative inline-block">
                    <span className={navStyles}>Skills</span>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/projects" className="group relative inline-block">
                    <span className={navStyles}>Projects</span>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/experience" className="group relative inline-block">
                    <span className={navStyles}>Experience</span>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/contact" className="group relative inline-block">
                    <span className={navStyles}>Contact</span>
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </nav>
        </header>
    )
}