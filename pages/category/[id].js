import React, { useEffect, useRef } from 'react';
import { Box, Container, Grid } from '@mui/material'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'

import Link from 'next/link';
import CategorySingleImg from '../../src/Components/CategorySingleImg/CategorySingleImg';
import CategoryLayout from '../../src/Components/CategoryLayout/CategoryLayout';

const CategoryDetails = ({ data }) => {
    const router = useRouter()
    useEffect(() => {
        if (!data._id && !data.categoryName) {
            router.push('/404')
            return
        }

    }, [data, router])


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
                sx={{ height: '50vh', }}
                className='relative overflow-hidden'
            >

                {
                    data.thumbnail && <Image onClick={() => setIsOpen(true)} className='w-full ' priority layout='raw' src={data.thumbnail} height={500} width={500} alt='photo'></Image>
                }
                <motion.div

                    style={{
                        background: 'linear-gradient(to bottom,  rgba(0,0,0,0.6) 0%,rgba(19,19,19,.9) 100%)'
                    }}
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
                            }} className='text-6xl font-family-allerta text-center '>

                            {
                                data.subCategory ? <span>{data.categoryName} - {data.subCategory}</span> : <span>{data.categoryName}</span>
                            }
                        </motion.h2>
                    </div>
                </motion.div>
            </Box>
            <Container>
                <div className='text-center py-5'>
                    <h2 className='text-2xl mb-5 mt-5 text-yellow-500'>{data.title}</h2>
                    <p className='text-gray-400'>
                        {data.description}
                    </p>
                </div>
                <div className='relative overflow-hidden'>
                    <Grid container spacing={2}>
                        {
                            [1, 2, 3, 4].map((element, i) => {
                                const len = data.photos?.length / 4;

                                return <Grid key={i} item md={3} >
                                    {
                                        data.photos?.slice(len * i, len * element).map((res, i) => <CategorySingleImg key={res} url={res} index={i}></CategorySingleImg>)
                                    }
                                </Grid>
                            })
                        }

                    </Grid>
                </div>
            </Container>
            {/* */}
        </motion.div >
    );
};
export default CategoryDetails;
export async function getServerSideProps({ params }) {
    const res = await fetch(`http://localhost:5000/singleCategory?id=${params.id}`)
    const data = await res.json();
    return {
        props: {
            data,
        },
    };

}