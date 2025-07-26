import React  from 'react'
import school from '../imgs/logos/school.png'
import work from '../imgs/logos/work.png'
const timeline_elements = [
    {
        id: 1,
        title: "Intramural Sports Supervisor",
        location: "University of Maryland, College Park, MD",
        description: "Led officiating teams and ensured smooth operation of university intramural games through scheduling, conflict resolution, and on-site management.", 
        buttonText: "Details",
        date: "2024-Present",
        icon: work,
    },
    {
        id: 2,
        title: "Intramural Sports Official",
        location: "University of Maryland, College Park, MD",
        description: "Officiated various intramural sports including basketball and soccer, maintaining fairness and game flow while upholding league rules.", 
        buttonText: "Details",
        date: "2024-Present",
        icon: work
    },
    {
        id: 3,
        title: "B.S. in Computer Science and Statistics",
        location: "University of Maryland, College Park, MD",
        description: "Double majoring in Computer Science and Statistics. Dean’s List, UMD Honors College.", 
        date: "Fall 2024-Spring 2028",
        buttonText: "Details",
        icon: school
    },
    {
        id: 4,
        title: "Sakura Japanese Steakhouse & Sushi",
        location: "Hunt Valley, MD",
        description: "Provided excellent customer service in a fast-paced restaurant environment. Developed strong communication and teamwork skills.", 
        date: "2020-2024",
        buttonText: "Details",
        icon: work
    },
    {
        id: 5,
        title: "Production Assistant",
        location: "Maryland Signs & Graphics",
        description: "Assisted in the design and assembly of custom signage. Gained hands-on experience with materials, tools, and client-focused production.", 
        date: "2020-2024",
        buttonText: "Details",
        icon: work
    },
    {
        id: 6,
        title: "High School Diploma",
        location: "Hereford High School, Parkton, MD",
        description: "Graduated with 5.61/6.00 gpa. Engaged in extracurriculars including basketball, xc/tf, honor societies, VEX robotics and rocketry.", 
        date: "2020-2024",
        buttonText: "Details",
        icon: school
    }
]

export default function Timeline({ defaultColor}) {
    return (
        <div>
            {timeline_elements.map((element) => {
                const color = `bg-blue-500`
                
                return (
                    <div key={element.id} className="flex m-4 relative">
                        <div className={`${color} w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden`}></div>
                        <div className={`${color} w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}></div>
                        <div className="hidden items-start w-44 relative sm:flex">
                            <div className="w-4/5 text-gray-500">{element.date}</div>
                            <div className={`${color} w-px h-full translate-x-5 translate-y-10 opacity-30`}></div>
                            <img 
                                src={element.icon} 
                                alt="" 
                                className={`${color} w-10 p-1 rounded-lg z-20`}/>
                            <div className={`${color} h-px w-8 translate-y-5 opacity-30`}></div>
                        </div>
                        <div className="border border-gray-600 rounded-lg px-8 py-4 bg-gray-800 w-full text-center z-10 sm:w-96">
                            <div className="text-xl text-gray-300 font-medium">{element.title}</div>
                            <div className="text-gray-300 mb-6 sm:mb-4 sm:text-xs">
                                {element.location}
                                <span className="sm:hidden">{element.date}</span>
                            </div>
                            <div className="mb-4 text-gray-300 text-center">{element.description}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}