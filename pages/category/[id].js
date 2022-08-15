import React, { useEffect, useRef } from 'react';
import { Box, Container, Grid } from '@mui/material'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'

import Link from 'next/link';
import CategorySingleImg from '../../src/Components/CategorySingleImg/CategorySingleImg';
import CategoryLayout from '../../src/Components/CategoryLayout/CategoryLayout';
import Footer from '../../src/Components/AboutPages/Footer';

const CategoryDetails = ({ data, error }) => {
    const router = useRouter()

    useEffect(() => {
        if (error) {
            router.push('/404')

        }
    }, [error, router])

    return (
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
                sx={{ height: '100vh', backgroundImage: `url(${data?.thumbnail})` }}

                className='relative overflow-hidden font-family-Helvetica font-thin  bg-cover bg-center'
            >

                {/* {
                    data.thumbnail && <Image onClick={() => setIsOpen(true)} className='w-full ' priority layout='raw' src={data.thumbnail} height={500} width={500} alt='photo'></Image>
                } */}
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
                                data?.subCategory ? <span>{data?.categoryName} - {data?.subCategory}</span> : <span>{data?.categoryName}</span>
                            }
                        </motion.h2>
                    </div>
                </motion.div>
            </Box>
            <div className="bg-chak">
                <div  >
                    <Container>
                        <div className=' my-20 py-5'>
                            <h2 className='text-4xl font-thin mb-5 mt-5 text-heading'>{data?.title}</h2>
                            <p className='text-contentText'>
                                {data?.description}
                            </p>
                        </div>
                        <div className='relative overflow-hidden'>
                            <Grid container spacing={0}>
                                {
                                    [1, 2, 3, 4].map((element, i) => {
                                        const len = data?.photos?.length / 4;

                                        return <Grid key={i} item md={3} >
                                            {
                                                data?.photos?.slice(len * i, len * element).map((res, i) => <CategorySingleImg allImage={data} elementNum={element} key={res} url={res} index={i}></CategorySingleImg>)
                                            }
                                        </Grid>
                                    })
                                }

                                {/* {
                                data?.photos?.map((res, i) => <Grid key={i} item md={3} >
                                    <CategorySingleImg allImage={data} key={res} url={res} index={i}></CategorySingleImg>
                                </Grid>)
                            }
                            <div className="flex">
                                {
                                    data?.photos?.map((res, i) => <CategorySingleImg allImage={data} key={res} url={res} index={i} ></CategorySingleImg>)
                                }
                            </div> */}

                            </Grid>
                        </div>

                    </Container>
                </div>
                {/* */}
                <Container>
                    <Footer></Footer>
                </Container>
            </div>
        </motion.div >
    );
};
export default CategoryDetails;
export async function getServerSideProps({ params }) {
    const res = await fetch(`https://stark-atoll-95180.herokuapp.com/singleCategory?id=${params.id}`)
    const data = await res.json();
    console.log(data);
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