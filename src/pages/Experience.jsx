import React from 'react'
import Timeline from '../components/Timeline.jsx'
const header = "text-blue-50 text-[50px] font-bold mb-5"


export default function Experience() {
    return (
        <div className="flex flex-col justify-center items-center mt-15">
            <h2 className={header}>Experience</h2>
            <Timeline defaultColor="bg-cyan-500" />
        </div>
    );
}
  