import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const images = [
    '../imgs/people/home.jpeg',
    ''
]

export default function Carousel() {
    const [index, setIndex] = useState(0);

    const prev = 1;
    const next = 1; 

    return (
        <div className="flex flex-row">
            <div>
                
            </div>
            <div>
                <AnimatePresence>
                    <motion.img
                    key={index}  
                    src={images[index]}
                    />
                </AnimatePresence>
            </div>
            <div>

            </div>
        </div>
    )
}
