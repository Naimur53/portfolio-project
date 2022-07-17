import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion'
import LightBox from './LightBox';
const CategorySingleImg = ({ url, index, elementNum, allImage }) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    const handleClose = () => {
        setIsOpen(false)
    }
    const pop = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: .5
            }
        }
    }
    return (
        <motion.div variants={pop} initial='initial' exit='initial' animate='animate' className='pb-4 grid-item cursor-pointer overflow-hidden cate-single-wrap'>
            <div className='overflow-hidden relative'>

                <Image onClick={() => setIsOpen(true)} className='w-full singleImg' priority layout='raw' src={url} height={200} width={200} alt='photo'></Image>
                <div className="overlay-img pointer-events-none absolute inset-0 p-4 ">
                    <div className='h-full relative'>
                        <div className="h-full  inset-0 absolute py-4">

                            <div className="b-1 h-full"></div>
                        </div>
                        <div className="h-full  inset-0 absolute px-4">

                            <div className="b-2 "></div>
                        </div>

                    </div>
                </div>
            </div>
            <LightBox
                url={url}
                allImage={allImage.photos}
                isVisible={isOpen}
                onClose={handleClose}
                index={index}
                elementNum={elementNum}
            />
        </motion.div>
    );
};


export default CategorySingleImg;