import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import { allData } from '../../dataSlice/dataSlice';
import DescriptionText from '../SmallComponents/DescriptionText';
import { Container, Grid } from '@mui/material';
import MgButton from '../SmallComponents/MgButton';
import CustomLink from '../SmallComponents/CustomLink';

const AboutTextArea = () => {
    const { scrollValue } = useSelector(allData)
    const [value, setValue] = useState(0);
    useEffect(() => {

    }, [scrollValue])
    return (
        <div className='overflow-hidden mt-10 h-full  '>
            <Container className='h-full'>
                <div className='py-10 md:mb-5 text-center px-2 md:px-20'>
                    {/* <DescriptionText text=""></DescriptionText> */}
                    <h1 className='text-3xl  md:text-5xl font-thin text-center font-family-Helvetica '>More than 40 years every day looking for perfection</h1>
                    <div className='flex justify-center'>

                        <h2 className='text-xl mt-3 w-full px-2 md:w-1/2 text-center  font-family-roboto text-contentText'>Every situation is different. Light fascinates me. I want to take it with me. Freeze and cherish the moment. </h2>
                    </div>
                    <div className='flex justify-center relative  items-center mt-10'>
                        <CustomLink href='/bio'>

                            <MgButton text='Read my Bio'></MgButton>
                        </CustomLink>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default AboutTextArea;