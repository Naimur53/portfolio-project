import React, { useEffect, useRef } from 'react';
import { Box, Container, Grid } from '@mui/material'
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'

import Link from 'next/link';
import CategorySingleImg from '../../src/Components/CategorySingleImg/CategorySingleImg';
import CategoryLayout from '../../src/Components/CategoryLayout/CategoryLayout';

const CategoryDetails = ({ data }) => {
    console.log(data);
    const gallery = useRef();
    const container = useRef();
    const router = useRouter()
    useEffect(() => {

        if (!data._id && !data.categoryName) {
            router.push('/404')
            return
        }

    }, [])
    const handleMouseMove = e => {
        let x = e.clientX - container.current.getBoundingClientRect().left
        let y = e.clientY - container.current.getBoundingClientRect().top
        gallery.current.style.top = `${y}px`;
        gallery.current.style.left = `${x}px`;
    }


    return (
        <motion.div exit={{ opacity: 0 }}>
            <Box
                sx={{ height: '50vh', }}
                className='relative overflow-hidden'
            >

                <Image onClick={() => setIsOpen(true)} className='w-full singleImg' priority layout='raw' src={data.thumbnail} height={500} width={500} alt='photo'></Image>
                <div
                    style={{
                        background: 'linear-gradient(to bottom,  rgba(0,0,0,0.6) 0%,rgba(19,19,19,.9) 100%)'
                    }}
                    className='absolute inset-0  flex justify-center items-center'

                >

                    <h2 className='text-6xl font-family-allerta '>{data.categoryName}</h2>
                </div>
            </Box>
            <Container>
                <div className='text-center py-5'>
                    <h2 className='text-2xl mb-5 mt-5 text-yellow-500'>{data.title}</h2>
                    <p className='text-gray-400'>
                        {data.description}
                    </p>
                </div>
                <div ref={container} onMouseMove={handleMouseMove} className='relative overflow-hidden'>
                    <Grid container spacing={2}>
                        {
                            [1, 2, 3, 4].map((element, i) => {
                                const len = data.photos?.length / 4;

                                return <Grid key={i} item md={3} >
                                    {
                                        data.photos?.slice(len * i, len * element).map(res => <CategorySingleImg key={res} url={res}></CategorySingleImg>)
                                    }
                                </Grid>
                            })
                        }

                    </Grid>
                    {/* <Grid container spacing={2}> */}
                    {
                        // [1, 2, 3, 4].map((element, i) => {
                        //     const len = data.photos?.length / 4;

                        //     return <CategoryLayout key={i} photos={data.photos?.slice(len * i, len * element)}>

                        //     </CategoryLayout>
                        // })
                    }

                    {/* </Grid> */}
                    <div className="gallery-wrap">
                        {/* {
                            data.photos.map(res => <div key={res} >
                                <CategorySingleImg url={res}></CategorySingleImg>
                            </div>)
                        } */}
                    </div>
                    <div ref={gallery} className='absolute left-0 top-0 p-16 rounded-full cursor-none gallery-overlay bg-red-400'>

                    </div>
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