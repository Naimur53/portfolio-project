import React from 'react';
import Head from '../../src/Components/Head/Head';
import { motion } from 'framer-motion';
import { Box, Container, Grid } from '@mui/material';
import CategoryCard from '../../src/Components/CategoryCard/CategoryCard';
const MainCategory = ({ data }) => {
    return (
        <div>
            <Head></Head>
            <motion.div initial={{
                y: 0
            }}
                animate={{
                    opacity: 1
                }}
                exit={{
                    opacity: 0
                }}>
                <Box
                    sx={{ height: '100vh', backgroundImage: `url(${data[0]?.thumbnail})` }}

                    className='relative overflow-hidden font-family-Helvetica font-thin  bg-cover bg-center'
                >

                    <motion.div
                        className='absolute inset-0  flex justify-center items-center'
                    >
                        <div className='overflow-hidden'>

                            <motion.h2
                                exit={{
                                    y: '100%'
                                }}
                                initial={{
                                    y: '100%'
                                }}
                                animate={{
                                    y: 0,
                                    transition: { duration: .7, }
                                }} className='text-6xl font-family-Helvetica text-center '>

                                {
                                    <span>{data[0]?.categoryName}</span>
                                }
                            </motion.h2>
                        </div>
                    </motion.div>
                </Box>
                <div className='mt-5 bg-chak bg-cover'>
                    <div className='mt-10 mb-20'>
                        <h2 className='text-xl md:text-3xl text-center font-family-mono font-thin'>
                            Funny stories, serious experience, <br />
                            photographic topics, <br />
                            you can find them all on my blog page.
                        </h2>
                    </div>
                    <Container>
                        <Grid container spacing={2}>
                            {
                                data?.map((res, i) => <Grid key={i} item xs={12} md={4}>
                                    <CategoryCard isItSub={true} i={i}  {...res}></CategoryCard>
                                </Grid>)

                            }
                        </Grid>
                    </Container>
                </div>
            </motion.div>
        </div>
    );
};

export default MainCategory;
export async function getServerSideProps({ params }) {
    const res = await fetch(`https://stark-atoll-95180.herokuapp.com/category?name=${params.name}`)
    const data = await res.json();

    if (!data) {
        return {
            props: {
                error: true
            }
        }
    } else {

        return {
            props: {
                data,
            },
        };
    }

}