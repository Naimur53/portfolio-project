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
        <div className='overflow-hidden mt-10 h-full  '>
            <Container className='h-full'>
                <div className='py-10 mb-5 text-center px-20'>
                    {/* <DescriptionText text=""></DescriptionText> */}
                    <h1 className='text-4xl font-thin text-center font-family-Helvetica '>MORE THAN 40 YEARS EVERY DAY LOOKING FOR PERFECTION</h1>
                    <div className='flex justify-center'>

                        <h2 className='text-xl mt-3 w-1/2 text-center  font-family-roboto text-contentText'>Every situation is different. Light fascinates me. I want to take it with me. Freeze and cherish the moment. </h2>
                    </div>
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
                            <h1 className='text-3xl mb-4 text-heading font-thin font-family-Helvetica  '>  Always Searching For The Shot</h1>
                            <p className='text-xl text-subTitles'>
                                I am always looking for the right camera angle.
                                <br />
                                To find that, no trouble is too much for me.
                                <br />
                                I see no obstacle in anything.
                                <br />
                                I only have one goal.
                                <br />
                                Creating and capturing images.

                            </p>
                        </div>


                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className='font-light'>
                            <h1 className='text-3xl mb-4 text-heading font-thin font-family-Helvetica'> John Baggen (1958)
                            </h1>
                            <p className='text-xl   text-subTitles'>
                                I have been a self-employed photographer since 1977. When I&apos;m at home, advertising and industrial photography are my areas of work. But as soon as I get on a journey, the social anthropological photographer comes to life. Making cultures visible worldwide creates an awareness. This awareness is the engine of mutual respect. Especially in a time when mutual respect and tolerance are drowned out by populist noises.
                                <br />
                                I want to photograph that which we may fear we will not find in ten or fifteen years&apos; time. I do it for the world and my children and grandchildren.

                            </p>
                        </div>


                    </Grid>

                </Grid>
            </Container>

        </div>
    );
};

export default AboutTextArea;