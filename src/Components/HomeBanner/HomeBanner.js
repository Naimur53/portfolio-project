import { Button, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Box } from '@mui/system';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';
import BannerText from './BannerText';
import CheckBanner from './CheckBanner';
const HomeBanner = ({ innerRoute }) => {
    const { scrollValue } = useSelector(allData)
    const [circle, setCircle] = useState([46, 76, 53])

    useEffect(() => {
        // circle(46.0 % at 76 % 53 %)
        const parse = parseInt(scrollValue * 100);
        let v1 = 46;
        let v2 = 76;
        let v3 = 53;
        if (scrollValue) {
            if (parse >= 1 && parse <= 25) {
                setCircle([40, 50, 50])
            }
            else {
                setCircle([50, 59, 94])
            }

        } else {
            setCircle([46, 76, 53])

        }
    }, [scrollValue])
    return (
        <Box className='h-full  bg-cover relative font-family-Helvetica'>
            <Container sx={{ height: '100%', position: 'relative', overflow: 'hidden', zIndex: 10 }}>
                <Grid container spacing={2} sx={{ height: '100%' }} alignItems='center'>
                    <Grid item md={6} xs={12} className='flex md:justify-start justify-center items-center md:h-full   h-1/2  '  >
                        <Box

                            className='h-full flex  justify-center   items-center'
                        >

                            <BannerText innerRoute={innerRoute}></BannerText>
                        </Box>
                    </Grid>
                    <Grid className='  ' item md={6} xs={12}  >
                        {/* <CheckBanner></CheckBanner>  */}
                        {/* <Image className='w-full' width={400} height={400} priority layout='raw' src='https://i.ibb.co/JjD17sF/Nikon-D5.jpg' alt='john photo' ></Image> */}
                        <motion.div
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1,
                                transition: { type: 'easeOut', delay: 2.8, duration: 1 }
                            }}

                        >

                            <Image className='w-full' width={400} height={400} priority layout='raw' src='https://i.ibb.co/thLdxj3/Nikon-D5.png' alt='john photo' ></Image>
                        </motion.div>
                    </Grid>
                </Grid>

            </Container>
            <div
                className="banner-wrap absolute inset-0">
                <div className='w-full flex items-end  h-full relative'>

                    <Image className='w-full mt-5' src='https://i.ibb.co/g3d0nbF/Adobe-Stock-477001574.jpg' width={700} height={100} alt='background web' priority layout='raw'></Image>

                    <motion.div
                        className='bg-black absolute inset-0'
                        initial={{
                            x: ' 0%'
                        }}
                        animate={{
                            x: '100%',
                            transition: { type: 'ease', delay: 1, duration: 1 }
                        }}
                    >

                    </motion.div>

                </div>
            </div>



        </Box>
    );
};

export default HomeBanner;