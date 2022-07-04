import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion'
import { allData } from '../../dataSlice/dataSlice';
import DescriptionText from '../SmallComponents/DescriptionText';
import { Container, Grid } from '@mui/material';

const AboutTextArea = () => {
    const { scrollValue } = useSelector(allData)
    const [value, setValue] = useState(0);
    useEffect(() => {

    }, [scrollValue])
    return (
        <div className='overflow-hidden mt-10 h-full bg-transparent-black'>
            <Container className='h-full'>
                <div className='py-10 mb-5 text-center'>
                    {/* <DescriptionText text=""></DescriptionText> */}
                    <h1 className='text-4xl font-family-allerta'>MORE THAN 40 YEARS EVERY DAY LOOKING FOR PERFECTION</h1>
                    <h2 className='text-xl font-thin mt-2'>Every situation is different. Light fascinates me. I want to take it with me. Freeze and cherish the moment. </h2>
                </div>
                {/* <motion.h2
                initial={{
                    x: 0,
                }}
                animate={{
                    x: -(scrollValue * 1000),
                    transition: { ease: 'easeOut' }
                }}
                className='text-6xl relative left-96 whitespace-nowrap'
            >MORE THAN 40 YEARS EVERY DAY LOOKING FOR PERFECTION</motion.h2> */}

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <div className='font-light'>
                            <h1 className='text-3xl mb-4 font-normal'>  Always Searching For The Shot</h1>
                            <p className='text-xl'>I am always looking for the right camera angle. To find that, no trouble is too much for me. I see no obstacle in anything. I only have one goal; Creating capturing images.</p>
                        </div>


                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className='font-light'>
                            <h1 className='text-3xl mb-4 font-normal'> John Baggen (1958)
                            </h1>
                            <p className='text-xl'>ince 1979 I have been an independent photographer. When I am home, advertising and industrial photography are my fields of work. But as soon as I get on a plane, the travel photographer comes to mind. Making cultures visible worldwide gives an awareness. This awareness is the engine for mutual respect. Certainly in a time when mutual respect and tolerance are drowned out by populist sounds.</p>
                        </div>


                    </Grid>

                </Grid>
            </Container>

        </div>
    );
};

export default AboutTextArea;