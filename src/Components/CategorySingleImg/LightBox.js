import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect } from 'react';
const myLoader = ({ src, width, quality }) => {
    return `https://i.ibb.co/${src}?w=${width}&q=${quality || 75}`
}
const LightBox = ({ isVisible, url, onClose, index, elementNum, allImage }) => {

    const [i, setI] = useState(allImage.findIndex(single => single === url));
    const [Preview, setPreview] = useState(
        allImage.map(single => <Image key={single} className=' h-auto w-auto ' priority layout='raw' src={single} height={500} width={1000}
            placeholder="blur"
            blurDataURL={'https://i.ibb.co/7KfTV5K/pexels-photo.jpg'} alt='photo'></Image>)
    )
    const handlePre = () => {

        if (i > 0) {
            setI(i - 1)
        }
        else {
            setI(allImage?.length - 1)
        }
        // console.log('pre', { index, elementNum, len }, allImage[(elementNum * len) - index]);

    }
    const handleNext = () => {
        if (i !== (allImage?.length - 1)) {
            setI(i + 1)
        }
        else {
            setI(0)
        }
    }
    console.log(i);
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='h-screen z-large p-5 relative bg-black'
                >
                    <div className='h-full  flex justify-center  items-center md:items-stretch'>
                        {
                            Preview[i]
                        }
                    </div>
                    <div className='absolute top-0 right-0'>
                        <button
                            onClick={() => { onClose() }}
                            className='p-1 m-4 bg-black opacity-80 hover:opacity-100 cursor-pointer'
                        ><CloseIcon></CloseIcon></button>

                    </div>
                    <div className='absolute top-0 left-0'>
                        <div
                            className='p-1 text-gray-200 m-4 bg-black opacity-80 hover:opacity-100 cursor-pointer'
                        > {i + 1}/{allImage.length}</div>

                    </div>
                    <div className="absolute inset-0 pointer-events-none  flex justify-center items-center">
                        <div className="flex w-full justify-between">
                            <button
                                onClick={() => handlePre()}
                                className='p-1 m-4 pointer-events-auto bg-black opacity-80 hover:opacity-100 cursor-pointer'
                            ><ArrowBackIcon></ArrowBackIcon></button>
                            <button
                                onClick={() => { handleNext() }}
                                className='p-1 m-4 pointer-events-auto bg-black opacity-80 hover:opacity-100 cursor-pointer'
                            ><ArrowForwardIcon></ArrowForwardIcon></button>

                        </div>


                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LightBox;