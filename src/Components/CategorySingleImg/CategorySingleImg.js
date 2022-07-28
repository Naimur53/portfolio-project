import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion'
import LightBox from './LightBox';
import CheckIcon from '@mui/icons-material/Check';
import { IconButton } from '@mui/material';
const CategorySingleImg = ({ url, index, elementNum, allImage, admin, setSelected, selected }) => {
    const [isOpen, setIsOpen] = useState(false);
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
    const handleClick = () => {
        if (admin) {
            selected.find(single => single === url) ?
                setSelected(be => {
                    return be.filter(single => single !== url)
                })
                :
                setSelected(be => [...be, url])

        } else {

            setIsOpen(true)
        }
    }
    return (
        <motion.div variants={pop} initial='initial' exit='initial' animate='animate' className='border border-white   cursor-pointer overflow-hidden relative cate-single-wrap '>
            <div className='overflow-hidden relative'>

                <Image onClick={() => handleClick()} className='w-full singleImg' priority layout='raw' src={url} height={200} width={200} alt='photo'></Image>
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
            {
                admin ? <div>
                    {
                        selected.find(single => single === url) && <div className='absolute top-0 right-0'>
                            <div className='p-1 rounded-full bg-blue-600 m-1'>

                                <CheckIcon sx={{ color: 'white' }}></CheckIcon>
                            </div>
                        </div>
                    }
                </div> : <div></div>
            }
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