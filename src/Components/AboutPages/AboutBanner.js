import { Box } from '@mui/material';
import React from 'react';
import MiddleContent from '../AboutMe/MiddleContent';
import DescriptionText from '../SmallComponents/DescriptionText';
import MainHeading from '../SmallComponents/MainHeading';

const AboutBanner = () => {
    return (
        <Box className=' '>
            <h1 className='mb-5 text-2xl font-light font-family-mono'>I&apos;m John</h1>
            <h2 className='text-5xl  font-family-allerta'> TODAY&apos;S SHOT IS BETTER THAN YESTERDAYS. </h2>
            <h2 className='mt-5 text-5xl  font-family-allerta'> THAT&apos;S WHY I LOVE TOMORROW.</h2>

        </Box>
    );
};

export default AboutBanner;