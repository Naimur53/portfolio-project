import Image from 'next/image';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';
import { motion } from 'framer-motion'
import { useState } from 'react';
const Middle = () => {
    const { scrollValue } = useSelector(allData);
    const [rotateValue, setRotateValue] = useState(0);
    const [value, setValue] = useState({
        content1: false,
        content2: false,
    })
    const [path, setPath] = useState('ellipse(15% 20% at 50% 50%)')
    const rounding = {
        initial: {
            clipPath: 'ellipse(24% 38% at 50% 50%)',
            rotate: 0,
        },
        animate: {
            clipPath: path,
            rotate: rotateValue * 100,

            transition: {
                clipPath: { duration: .5, type: 'easeOut' },
                default: {}
            }

        }
    }
    const roundImage = {
        initial: {
            rotate: 0

        },
        animate: {
            rotate: -(rotateValue * 100)

        }
    }
    useEffect(() => {
        console.log(scrollValue);
        const scroll = scrollValue.toFixed(1)
        if (scroll >= 4) {
            setPath('ellipse(16% 23% at 50% 50%)')
            setRotateValue(scrollValue)
        }
        else if (scroll >= 3.8) {

            setPath('ellipse(9% 15% at 50% 50%)')
            setRotateValue(scrollValue)


        }
        else if (scroll >= 2.3) {

            setPath('ellipse(0% 0% at 50% 50%)')


        }
        else if (scroll >= 2) {
            setPath('ellipse(9% 15% at 50% 50%)')
            setRotateValue(1.8)

        }
        else {
            setPath('ellipse(16% 23% at 50% 50%)')
            setRotateValue(scrollValue)

        }
    }, [scrollValue])
    console.log(path);
    return (
        <div className=' h-full flex justify-center cursor-pointer  items-center'>
            <motion.div initial='initial' animate='animate' variants={rounding}
                className='   flex justify-center     h-full w-full items-center '>
                <motion.div initial='initial' className='  p-2  flex flex-col justify-center items-center' animate='animate' variants={roundImage}>

                    <Image className='middle-image w-screen-30 hidden lg:block' src='https://i.ibb.co/BtbKgFL/20190320-WEST-AFRICA-FROM-GUNJUR-TO-BASSE-2964-2.jpg' width={400} height={400} alt='John photos' layout='raw' priority></Image>

                    <Image className='middle-image md:hidden block ' src='https://i.ibb.co/BtbKgFL/20190320-WEST-AFRICA-FROM-GUNJUR-TO-BASSE-2964-2.jpg' width={400} height={400} alt='John photos' layout='raw' priority></Image>

                </motion.div>
            </motion.div>

        </div>
    );
};

export default Middle;