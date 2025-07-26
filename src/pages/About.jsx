import React from 'react'
import hike from '../imgs/people/hike.jpeg'
import basketball from '../imgs/people/basketball.jpg'
import track from '../imgs/people/running.jpeg'
import kbbq from '../imgs/people/kbbq.jpeg'
import family from '../imgs/people/family.jpeg'
import bff from '../imgs/people/bestfriends.jpeg'
import hometown from '../imgs/people/hometown.jpeg'
import college from '../imgs/people/college.jpeg'
import watermelon from '../imgs/logos/watermelon.png'
import indo from '../imgs/logos/indonesia.png'
import ball from '../imgs/logos/basketball.png'
import ref from '../imgs/people/ref.jpeg'
import vex from '../imgs/logos/vex.png'
import chess from '../imgs/logos/chess.png'
const header2 = "text-blue-50 text-[50px] font-bold mb-5"
const header3 = "text-blue-50 text-[40px] font-semibold mt-30 mb-15"
const text_style = "text-lg text-white tracking-wide text-center"
const boxes_layout = "flex flex-row gap-7 w-auto text-white"
const box_style = "flex flex-col justify-center items-center w-[300px] h-[150px] border-2 border-gray-500 rounded-xl bg-gray-900 gap-1 hover:-translate-y-1 transition-transform duration-300 p-5"
const img_caption = "flex flex-col justify-center items-center"
const img_style = "h-auto relative z-10 mb-5 rounded-xl"
const img_boxes = "flex flex-col justify-center items-center gap-25"
const text_caption = "mt-2 text-sm text-gray-300 text-center italic leading-snug";

export default function About() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-[80%] flex justify-center items-center flex-col gap-5 mt-15">
                <h2 className={header2}>About Me</h2>
                <img 
                    className="w-[60%] h-auto relative z-10 mb-5 rounded-full" 
                    src={hike} 
                    alt="colin_hiking" 
                    style={{ 
                        filter: 'drop-shadow(0 0 15px #3B82F6)',
                        boxShadow: 'inset 0 0 50px 30px rgba(0,0,0,0.8)',
                    }}
                />
                <p className={text_style}>
                    Outside of studying Computer Science and Statistics at UMD, I’m passionate about staying active — whether it’s playing basketball, running, or lifting weights. I also have a big appetite for food and love trying anything I can get my hands on! In my downtime, I enjoy playing chess and spending quality time with my friends and family. One of my biggest dreams is to travel the world with my loved ones and experience the amazing places it has to offer.
                </p>
            </div>
            <h3 className={header3}>Interests & Passions</h3>
            <div className={img_boxes}>
                <figure className={img_caption}>
                    <img 
                        className={`${img_style} w-[450px]`}
                        src={basketball} 
                        alt="colin_basketball" 
                        style={{ 
                            filter: 'drop-shadow(0 0 15px #3B82F6)',
                            boxShadow: 'inset 0 0 50px 30px rgba(0,0,0,0.8)',
                        }}
                    />
                    <figcaption className={text_caption}>
                        Warming up for a varsity basketball game in high school
                    </figcaption>
                </figure>
                <figure className={img_caption}>
                    <img 
                        className={`${img_style} w-[600px]`} 
                        src={track} 
                        alt="colin_xc" 
                        style={{ 
                            filter: 'drop-shadow(0 0 15px #3B82F6)',
                            boxShadow: 'inset 0 0 50px 30px rgba(0,0,0,0.8)',
                        }}
                    />
                    <figcaption className={text_caption}>
                        My cross country team winning Bull Run, one of the hardest courses on the East Coast
                    </figcaption>
                </figure>
                <figure className={img_caption}>
                    <img 
                        className={`${img_style} w-[450px]`} 
                        src={kbbq} 
                        alt="eating_kbbq" 
                        style={{ 
                            filter: 'drop-shadow(0 0 15px #3B82F6)',
                            boxShadow: 'inset 0 0 50px 30px rgba(0,0,0,0.8)',
                        }}
                    />
                    <figcaption className={text_caption}>
                        Eating HoneyPig next to the UMD campus
                    </figcaption>
                </figure>
                <figure className={img_caption}>
                    <img 
                        className={`${img_style} w-[450px]`} 
                        src={ref} 
                        alt="colin_officiating" 
                        style={{ 
                            filter: 'drop-shadow(0 0 15px #3B82F6)',
                            boxShadow: 'inset 0 0 50px 30px rgba(0,0,0,0.8)',
                        }}
                    />
                    <figcaption className={text_caption}>
                        Officiating an Intramural basketball game at UMD
                    </figcaption>
                </figure>
            </div>
            <h3 className={header3}>Friends & Family</h3>
            <div className={img_boxes}>
            <figure className={img_caption}>
                    <img 
                        className={`${img_style} w-[600px]`} 
                        src={family} 
                        alt="colin_family" 
                        style={{ 
                            filter: 'drop-shadow(0 0 15px #3B82F6)',
                            boxShadow: 'inset 0 0 50px 30px rgba(0,0,0,0.8)',
                        }}
                    />
                    <figcaption className={text_caption}>
                        My family!
                    </figcaption>
                </figure>
                <figure className={img_caption}>
                    <img 
                        className={`${img_style} w-[450px]`} 
                        src={bff} 
                        alt="colin_bestfriends" 
                        style={{ 
                            filter: 'drop-shadow(0 0 15px #3B82F6)',
                            boxShadow: 'inset 0 0 50px 30px rgba(0,0,0,0.8)',
                        }}
                    />
                    <figcaption className={text_caption}>
                        Two of my bestfriends CJ & Ben
                    </figcaption>
                </figure>
                <figure className={img_caption}>
                    <img 
                        className={`${img_style} w-[600px]`} 
                        src={college} 
                        alt="colin_college_friends" 
                        style={{ 
                            filter: 'drop-shadow(0 0 15px #3B82F6)',
                            boxShadow: 'inset 0 0 50px 30px rgba(0,0,0,0.8)',
                        }}
                    />
                    <figcaption className={text_caption}>
                        Some of my amazing friends I've made in college!
                    </figcaption>
                </figure>
                <figure className={img_caption}>
                    <img 
                        className={`${img_style} w-[600px]`} 
                        src={hometown} 
                        alt="colin_hometown_friends" 
                        style={{ 
                            filter: 'drop-shadow(0 0 15px #3B82F6)',
                            boxShadow: 'inset 0 0 50px 30px rgba(0,0,0,0.8)',
                        }}
                    />
                    <figcaption className={text_caption}>
                        A couple of my hometown friends at an Orioles game
                    </figcaption>
                </figure>
            </div>
            <h3 className={`${header3} mb-5`}>Fun Facts</h3>
            <div className={`${boxes_layout}} mb-5`}>
                <div className={`${box_style}`}>
                    <img className="w-[55px]" src={indo} alt="indo_flag" />
                    <p className={text_style}>My first language growing up was Indonesian!</p>
                </div>
                <div className={`${box_style}`}>
                    <img className="w-[45px] mb-1" src={chess} alt="chess_piece" />
                    <p className={text_style}>I placed 2nd place in the BCPS chess tournament!</p>
                </div>
                <div className={box_style}>
                    <img className="w-[55px]" src={watermelon} alt="watermelon" />
                    <p className={text_style}>I can eat an entire watermlon in one sitting!</p>
                </div>
            </div>
            <div className={`${boxes_layout} mb-30`}>
                <div className={box_style}>
                    <img className="w-[50px] mb-1" src={ball} alt="basketball" />
                    <p className={text_style}>I've played basketball since third grade!</p>
                </div>
                <div className={box_style}>
                    <img className="w-[100px] mb-1" src={vex} alt="vex_logo" />
                    <p className={text_style}>I've been to the Vex/Vex IQ World Championships four times!</p>
                </div>
            </div>
        </div>
    )
}