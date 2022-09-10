import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import { allData } from '../../dataSlice/dataSlice';
import DescriptionText from '../SmallComponents/DescriptionText';
import { Container, Grid } from '@mui/material';
import MgButton from '../SmallComponents/MgButton';
import CustomLink from '../SmallComponents/CustomLink';
import Image from 'next/image';

const AboutTextArea = () => {
    const { scrollValue } = useSelector(allData)
    const [value, setValue] = useState(0);
    useEffect(() => {

    }, [scrollValue])
    return (
        <div className='overflow-hidden mt-10 h-full flex items-center '>
            <Container className='h -full'>
                <div className='py-10 pt-5 md:mb-5 -center text-center px-2 md:px-20'>
                    {/* <DescriptionText text=""></DescriptionText> */}
                    <h1 className='text-3xl  md:text-5xl font-thin text-center font-family-Helvetica '>More than 40 years every day looking for perfection</h1>
                    <div className='flex justify-center mt-10'>
                        <div>
                            <div className=' flex flex-col items-center'>
                                <Image className='m-0' src='https://i.ibb.co/BGZTNty/AGFA-isolet-kl.jpg' width={500} height={400} layout='raw' alt='first Camera'></Image>

                                <h2 className='text-2xl text-white mt-3 w-full px-2 md:w-1/2 text-center  font-family-roboto text-contentText'>
                                    This is how it all started
                                    <span className='block text-xl text-subTitles'>John Baggen (1958)</span>

                                </h2>
                                <p className='text-contentText  w-full md:w-2/3 mt-5 '>
                                    As a boy of 11 years old, I was allowed to borrow the Agfa Isolet from my father. A 60 mm roll film camera. Completely manual. In 1969 there were no &apos;Automatic&apos; cameras. Estimating the distance of focus and setting it manually. The separate Gossen light meter gave you an indication of aperture and shutter speed. That was all. During my &apos;outings&apos; with my friends, I took the camera along and photographed what we experienced. The reporter was born.
                                    <br />
                                    <br />

                                    Not every photo was great. But sometimes there was one that I thought was special. By the way, not all negatives were printed. That would have been too expensive.

                                </p>
                            </div>
                            <div className='flex justify-center relative  items-center mt-10'>
                                <CustomLink href='/bio'>

                                    <MgButton text='Read my Bio'></MgButton>
                                </CustomLink>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default AboutTextArea;