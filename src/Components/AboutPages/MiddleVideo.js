
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';
import { motion } from 'framer-motion'
import { useState } from 'react';
const MiddleVideo = () => {
    const { scrollValue } = useSelector(allData);
    const [path, setPath] = useState('circle(2% at 50% 50%)')
    const [value, setValue] = useState({ visible: false, path: false });
    const video = useRef()
    useEffect(() => {
        console.log(scrollValue);
        const scroll = scrollValue.toFixed(1)
        if (scroll >= 2.6) {

            setPath(`circle(${(scroll * 15) + 19.3}% at 50% 50%)`)
            setValue({ visible: true, path: true })

        }
        else if (scroll >= 2.5) {
            setPath('circle(19.3% at 50% 50%)')
            setValue({ visible: true })

        }
        else {
            setPath('circle(2% at 50% 50%)')
            setValue({ visible: false, path: false })


        }
    }, [scrollValue])
    const wrapper = {
        initial: {
            clipPath: 'circle(2% at 50% 50%)'
        },
        animate: {
            clipPath: path,
            transition: {
                clipPath: { duration: .5, },
            }
        }
    }
    const inner = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        }
    }

    return (
        <motion.div initial='initial' animate={"animate"} variants={wrapper} className='h-full'>
            <motion.div variants={inner} animate={value.visible ? "animate" : 'initial'} className='h-full flex justify-center items-center'>
                {
                    value.visible && <video ref={video} controls loop className='h-5/6 w-5/6'>
                        <source src="https://res.cloudinary.com/dvor8fuxv/video/upload/v1656928694/myfolder/mysubfolder/1283733467_dotgvp.mp4" type="video/mp4" />
                    </video>
                }
            </motion.div>
        </motion.div>
    );
};

export default MiddleVideo;