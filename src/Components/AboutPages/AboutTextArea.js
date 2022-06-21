import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import { allData } from '../../dataSlice/dataSlice';
import { Grid } from 'swiper';
import DescriptionText from '../SmallComponents/DescriptionText';

const AboutTextArea = () => {
    const { scrollValue } = useSelector(allData)
    const [value, setValue] = useState(0);
    useEffect(() => {

    }, [scrollValue])
    return (
        <div className='overflow-hidden mt-10 h-screen'>
            <div>
                <DescriptionText text="Every situation is different. Light fascinates me. I want to take it with me. Freeze and cherish the moment. "></DescriptionText>
            </div>
            <motion.h2
                initial={{
                    x: 0,
                }}
                animate={{
                    x: -(scrollValue * 1000),
                    transition: { ease: 'easeOut' }
                }}
                className='text-6xl relative left-96 whitespace-nowrap'
            >MORE THAN 40 YEARS EVERY DAY LOOKING FOR PERFECTION</motion.h2>

            {/* <Grid container >
                <Grid item xs={12} md={6}>


                </Grid>

            </Grid> */}

        </div>
    );
};

export default AboutTextArea;