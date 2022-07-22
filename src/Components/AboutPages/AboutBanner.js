import { Box } from '@mui/material';
import React from 'react';
import MiddleContent from '../AboutMe/MiddleContent';
import DescriptionText from '../SmallComponents/DescriptionText';
import MainHeading from '../SmallComponents/MainHeading';
import { motion } from 'framer-motion'
const AboutBanner = () => {
    const leftIn = {
        initial: {
            x: '-100%'
        },
        animate: {
            x: '0%',
            transition: {
                type: 'easeOut',
            }
        }
    }
    return (
        <Box className=''>
            <div className='inline-block overflow-hidden'>

                <motion.h1
                    initial='initial'
                    animate='animate'
                    exit='initial'
                    variants={leftIn}
                    className='mb-5 text-2xl font-light font-family-mono'>I&apos;m John</motion.h1>
            </div>
            <div className='text-5xl'>

                <MainHeading title='TODAY&apos;S SHOT IS BETTER THAN YESTERDAYS.'></MainHeading>
            </div>
            <div className='text-5xl mt-5   '>

                <MainHeading title='THAT&apos;S WHY I LOVE TOMORROW.'></MainHeading>
            </div>

        </Box>
    );
};

export default AboutBanner;