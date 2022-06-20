import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';
import { motion } from 'framer-motion';
const HomeTextSection = () => {
    const { scrollValue } = useSelector(allData);
    const [value, setValue] = useState(0);
    useEffect(() => {
        setValue(scrollValue.toFixed(2))
    }, [scrollValue])
    console.log(value);
    return (
        <div className='h-full overflow-hidden   relative flex font-family-allerta justify-center items-center'>
            <h2 className='text-6xl text-center'>
                Don’t over
                <br />
                organize.
                <br />
                Be on time and
                <br />
                stay until you are
                <br />
                completely
                <br />
                satisfied.
            </h2>
            <div className='absolute inset-0  flex justify-center items-center font-family-roboto'>
                <div>
                    <div>

                        <motion.span
                            initial={{
                                x: 0,
                                rotate: 0,
                                transition: { ease: [0.455, 0.03, 0.515, 0.955], }
                            }}
                            animate={{
                                x: -(value * 120),
                                rotate: -(value * 20),
                                transition: { ease: "easeOut", duration: 1 }
                            }}

                            className='p-3 mr-5 text-gray-800 bg-yellow-400 rounded-full inline-block'>Lorem ipsum dolor sit amet consectetur </motion.span>
                        <motion.span
                            initial={{
                                x: 0,
                                rotate: 0,
                                transition: { ease: [0.455, 0.03, 0.515, 0.955], }
                            }}
                            animate={{
                                x: (value * 120),
                                rotate: (value * 20),
                                transition: { ease: "easeOut", duration: 1 }
                            }}

                            className='p-3 mr-5 text-gray-800 bg-yellow-400 rounded-full inline-block'>Lorem ipsum dolor sit amet consectetur </motion.span>
                    </div>
                    <div className='my-32'>

                        <motion.span
                            initial={{
                                x: 0,
                                rotate: 0,
                                transition: { ease: [0.455, 0.03, 0.515, 0.955], }
                            }}
                            animate={{
                                x: -(value * 100),
                                rotate: (value * 5),
                                transition: { ease: "easeOut", duration: 1 }
                            }}

                            className='p-3 mr-5 text-gray-800 bg-yellow-400 rounded-full inline-block'>Lorem ipsum dolor sit amet </motion.span>
                        <motion.span
                            initial={{
                                x: 0,
                                rotate: 0,
                                transition: { ease: [0.455, 0.03, 0.515, 0.955], }
                            }}
                            animate={{
                                x: (value * 300),
                                rotate: -(value * 20),
                                transition: { ease: "easeOut", duration: 1 }
                            }}

                            className='p-3 mr-5 text-gray-800 bg-yellow-400 rounded-full inline-block'>Lorem ipsum dolor sit amet consectetur </motion.span>
                    </div>
                    <div className='flex justify-center'>
                        <div>
                            <motion.span
                                initial={{
                                    x: 0,
                                    y: 0,
                                    rotate: 0,
                                    transition: { ease: [0.455, 0.03, 0.515, 0.955], }
                                }}
                                animate={{
                                    x: (value * 100),
                                    y: (value * 30),
                                    rotate: (value * 5),
                                    transition: { ease: "easeOut", duration: 1 }
                                }}

                                className='p-3 mr-5 text-gray-800 bg-yellow-400 rounded-full inline-block'>Lorem ipsum dolor sit amet </motion.span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default HomeTextSection;