import React from 'react'
import react from '../imgs/logos/react.png'
import js from '../imgs/logos/javascript.png'
import html from '../imgs/logos/html.png'
import css from '../imgs/logos/css.png'
import java from '../imgs/logos/java.png'
import python from '../imgs/logos/python.png'
import tailwind from '../imgs/logos/tailwind.svg'
const header = "text-blue-50 text-[50px] font-bold"
const boxStyle = "flex flex-col justify-center items-center w-[350px] h-[150px] border-2 border-gray-500 rounded-xl bg-gray-900 gap-1 hover:-translate-y-1 transition-transform duration-300"
const boxes = "flex flex-row gap-7 m-5 w-auto text-white mb-15"

export default function Skills() {
    return (
        <div className="flex flex-col justify-center items-center mt-5">
            <h2 className={header}>Backend</h2>
            <div className={boxes}>
                <div className={boxStyle}>
                    <img className="w-[35px] pb-1" src={java} alt="java" />
                    <p>Java</p>
                    <p>Object-Oriented Programming</p>
                </div>
                <div className={boxStyle}>
                    <img className="w-[35px]" src={python} alt="python" />
                    <p>Python</p>
                    <p>Multi-Paradigm Programming Language</p>
                </div>
            </div>
            <h2 className={header}>Frontend</h2>
            <div className={boxes}>
                <div className={boxStyle}>
                    <div className="flex flex-row items-center justify-center gap-2">
                        <img className="w-[35px]" src={html} alt="html" />
                        <img className="w-[45px]" src={css} alt="css" />
                    </div>
                    <p>HTML/CSS</p>
                    <p>Core Web Markup & Styling Languages</p>
                </div>
                <div className={boxStyle}>
                    <img className="w-[45px]" src={js} alt="javascript" />
                    <p>JavaScript</p>
                    <p>Dynamic Scripting Language for the Web</p>
                </div>
                <div className={boxStyle}>
                    <img className="w-[35px]" src={react} alt="react" />
                    <p>React</p>
                    <p>Component-Based Frontend Library</p>
                </div>
            </div>
            <h2 className={header}>Libraries & Tools</h2>
            <div className={boxes}>
                <div className={boxStyle}>
                    <img className="w-[35px] pb-1.5" src={tailwind} alt="tailwind" />
                    <p>Tailwind CSS</p>
                    <p>Utility-First CSS Framework</p>
                </div>
            </div>
        </div>
    )
}