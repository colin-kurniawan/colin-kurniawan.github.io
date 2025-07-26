import React from 'react'
import poker from '../imgs/logos/poker.png'
const header = "text-blue-50 text-[50px] font-bold mt-15 mb-15"
const box_style = "flex flex-col justify-center items-center w-[450px] h-[300px] border-2 border-gray-500 rounded-xl bg-gray-900 gap-1 hover:-translate-y-1 transition-transform duration-300 p-5"
const text_style = "text-lg text-white tracking-wide text-center"

export default function Projects() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className={header}>Projects</h2>
            <div className="grid grid-cols-1 grid-rows-1">
                <div className={`${box_style}`}>
                    <img className="w-[100px] mb-1" src={poker} alt="vex_logo" />
                    <p className={text_style}>I'm building a poker hand evaluator that ranks hands using custom logic and suit-based scoring!</p>
                </div>
            </div>
        </div>
    )
}