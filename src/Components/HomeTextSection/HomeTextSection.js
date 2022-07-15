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
    const phone = 'p-3 mr-5  text-gray-900 bg-white rounded-full inline-block md:hidden';
    const big = 'p-3 mr-5 text-gray-900 bg-white rounded-full md:inline-block hidden';
    return (
        <div className='h-full overflow-hidden   relative flex font-family-allerta justify-center items-center'>
            <h2 className='text-5xl md:text-6xl 2xl:text-8xl text-center'>
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
                        {/* big */}
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

                            className={big}>Lorem ipsum dolor  </motion.span>
                        {/* phone */}
                        <motion.span
                            initial={{
                                x: 0,
                                rotate: 0,
                                transition: { ease: [0.455, 0.03, 0.515, 0.955], }
                            }}
                            animate={{
                                x: -(value * 40),
                                rotate: -(value * 20),
                                transition: { ease: "easeOut", duration: 1 }
                            }}

                            className={phone}>Lorem ipsum dolor  </motion.span>
                        {/* big */}

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

                            className={big}>  amet consectetur </motion.span>
                        {/*  */}
                        <motion.span
                            initial={{
                                x: 0,
                                rotate: 0,
                                transition: { ease: [0.455, 0.03, 0.515, 0.955], }
                            }}
                            animate={{
                                x: (value * 40),
                                rotate: (value * 20),
                                transition: { ease: "easeOut", duration: 1 }
                            }}

                            className={phone}>  amet consectetur </motion.span>
                    </div>
                    <div className='my-32'>

                        <motion.span
                            initial={{
                                x: 0,
                                rotate: 0,
                                transition: { ease: [0.455, 0.03, 0.515, 0.955], }
                            }}
                            animate={{
                                x: -(value * 250),
                                rotate: (value * 20),
                                transition: { ease: "easeOut", duration: 1 }
                            }}

                            className={big}> dolor sit amet dfd </motion.span>
                        <motion.span
                            initial={{
                                x: 0,
                                rotate: 0,
                                transition: { ease: [0.455, 0.03, 0.515, 0.955], }
                            }}
                            animate={{
                                x: -(value * 40),
                                rotate: (value * 20),
                                transition: { ease: "easeOut", duration: 1 }
                            }}

                            className={phone}> dolor sit amet dfd </motion.span>
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

                            className={big}>Lorem ipsum dolor  </motion.span>
                        <motion.span
                            initial={{
                                x: 0,
                                rotate: 0,
                                transition: { ease: [0.455, 0.03, 0.515, 0.955], }
                            }}
                            animate={{
                                x: (value * 70),
                                rotate: -(value * 20),
                                transition: { ease: "easeOut", duration: 1 }
                            }}

                            className={phone}>Lorem ipsum dolor  </motion.span>
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

                                className='p-3 mr-5  text-gray-900 bg-white rounded-full inline-block'>Lorem ipsum dolor sit amet </motion.span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default HomeTextSection;