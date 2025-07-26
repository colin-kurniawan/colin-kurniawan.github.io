import React from 'react'
import home from '../imgs/people/home.jpeg'
import insta from '../imgs/logos/insta.png'
import git from '../imgs/logos/github.png'
import linked from '../imgs/logos/linkedin.png'
import mail from '../imgs/logos/email.png'
const navStyle = "border-2 border-[#3B82F6] rounded-full h-12 w-12 flex justify-center items-center"
const imgStyle = "object-contain block"

export default function Home() {
    return(
        <div className="relative z-0 flex flex-row gap-5 justify-center items-center p-5 flex-1 min-h-0 ">
            <div className="flex justify-center items-center w-[40%] p-5 mr-4">
                <img 
                    className="w-[80%] h-auto relative z-10" 
                    src={home} 
                    alt="homeImage" 
                    style={{ 
                        filter: 'drop-shadow(0 0 15px #3B82F6)',
                        boxShadow: 'inset 0 0 50px 30px rgba(0,0,0,0.8)',
                    }}
                />
            </div>
            <div className="flex flex-col w-[40%] gap-5 ml-3">
                <div>
                    <p className="text-white font-semibold text-7xl pb-4">
                        Hi, I'm <span className="text-[#3B82F6]">Colin</span>
                    </p>
                </div>
                <div>
                    <p className="text-white font-medium text-4xl pb-4">
                        I'm a<span className="text-[#3B82F6]"> Coder</span>
                    </p>
                </div>
                <div>
                    <p className="text-lg text-white tracking-wide">I am a Sopohmore at the University of Maryland, College Park pursuing a Bachelors in Computer Science and Mathematics on a Statistics Track. I love building projects that solve real problems or teach me something new.</p>
                </div>
                <nav className="flex flex-row justify-end items-center gap-4 w-[100%] mt-5">
                    <div className="flex justify-center items-center rounded-full h-16 w-16">
                        <a className={navStyle} href="https://www.instagram.com/colin.kurniawan/?hl=zh-cn" target="_blank" rel="noopener noreferrer">
                            <img className={`{imgStyle} w-[37px]`} src={insta} alt="" />
                        </a>
                    </div>
                    <div className="flex justify-center items-center rounded-full h-16 w-16">
                        <a className={navStyle} href="https://github.com/colin-kurniawan/colin-kurniawan" target="_blank" rel="noopener noreferrer">
                            <img className={`{imgStyle} w-[37px]`} src={git} alt="" />
                        </a>
                    </div>
                    <div className="flex justify-center items-center rounded-full h-16 w-16">
                        <a className={navStyle} href="https://www.linkedin.com/in/colin-kurniawan-15b541353" target="_blank" rel="noopener noreferrer">
                            <img className={`{imgStyle} w-[25px]`} src={linked} alt="" />
                        </a>
                    </div>
                    <div className="flex justify-center items-center rounded-full h-16 w-16">
                        <a className={navStyle} href="" target="_blank" rel="noopener noreferrer">
                            <img className={`{imgStyle} w-[30px]`} src={mail} alt="" />
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    )
}