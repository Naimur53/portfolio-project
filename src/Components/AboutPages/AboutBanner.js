import { Box } from '@mui/material';
import React from 'react';
import MiddleContent from '../AboutMe/MiddleContent';
import DescriptionText from '../SmallComponents/DescriptionText';
import MainHeading from '../SmallComponents/MainHeading';

const AboutBanner = () => {
    return (
        <Box
            className='no-repeat bg-cover bg-fixed bg-bottom relative'
            sx={{ height: '60vh', background: 'url(https://i.ibb.co/6XRVfkN/20190320-SABATY-YAYA-BAYO-THE-DOCUMENTARY-008-2-1-1.jpg)' }}>
            <div style={{ background: '#0000008a' }} className="absolute inset-0 flex justify-center items-center">
                <div className='text-center'>
                    <MainHeading title='About Me'></MainHeading>
                    <div className='text-xl'>

                        <DescriptionText text={`— TODAY'S SHOT IS BETTER THAN YESTERDAYS. THAT'S WHY I LOVE TOMORROW. —`}></DescriptionText>
                    </div>
                </div>
            </div>
            <div className="absolute shadow-overlay bg-black  bottom-0 left-0 w-full h-2"></div>
        </Box>
    );
};

export default AboutBanner;