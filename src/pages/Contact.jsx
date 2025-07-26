import React from 'react'
import git from '../imgs/logos/github.png'
import linkedIn from '../imgs/logos/linkedin.png'
import email from '../imgs/logos/email.png'
import resume from '../imgs/logos/resume.png'
const header = "text-blue-50 text-[50px] font-bold p-5"
const boxStyle = "flex flex-row justify-center items-center w-[300px] h-[125px] border-2 border-gray-500 rounded-xl bg-gray-900 gap-1 hover:-translate-y-1 transition-transform duration-300 text-white gap-5 text-3xl font-bold"

export default function Contact() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className={header}>Contact Me</h2>
            <nav className="flex flex-col gap-5">
                <a href="https://github.com/colin-kurniawan/colin-kurniawan?tab=readme-ov-file" target="_blank" rel="noopener noreferrer"
                >
                    <div className={boxStyle}>
                        <img className="w-[60px]" src={git} alt="" /> 
                        <p>Github</p>
                    </div>    
                </a>
                <a href="https://www.linkedin.com/in/colin-kurniawan-15b541353/" target="_blank" rel="noopener noreferrer"
                >
                    <div className={boxStyle}>
                        <img className="w-[60px]" src={linkedIn} alt="" />
                        <p>LinkedIn</p>
                    </div>
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                >
                    <div className={boxStyle}>
                        <img className="w-[60px]" src={resume} alt="" />
                        <p>Resume</p>
                    </div>
                </a>
                <a href="mailto:colinconnor06@gmail.com" target="_blank" rel="noopener noreferrer"
                >
                    <div className={boxStyle}>
                        <img className="w-[60px]" src={email} alt="" />
                        <p>Email</p>
                    </div>
                </a>
            </nav>
        </div>
    )
}