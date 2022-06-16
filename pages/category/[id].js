import React, { useEffect } from 'react';
import { Box, Container, Grid } from '@mui/material'
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'

import Link from 'next/link';
import CategorySingleImg from '../../src/Components/CategorySingleImg/CategorySingleImg';

const CategoryDetails = ({ data }) => {
    console.log(data);
    const router = useRouter()

    const handleScroll = e => {
    }
    useEffect(() => {

        if (!data._id && !data.categoryName) {
            router.push('/404')
            return
        }

    }, [])

    return (
        <motion.div exit={{ opacity: 0 }}>
            <Box
                // onScroll={handleScroll}
                onWheel={handleScroll}
                sx={{
                    background: `linear-gradient(to bottom,  rgba(0,0,0,0.6) 0%,rgba(19,19,19,1) 100%),url("${data.thumbnail}")`,
                    height: '50vh',
                }}
                className='bg-cover bg-center bg-no-repeat flex justify-center items-center'
            >
                <h2 className='text-6xl '>{data.categoryName}</h2>
            </Box>
            <Container>
                <div className='text-center py-5'>
                    <h2 className='text-2xl mb-5 mt-5 '>{data.title}</h2>
                    <p>
                        {data.description}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi error libero voluptatibus possimus officia tenetur eligendi facilis quae molestiae, maiores earum quisquam dolores quidem? Quo natus eveniet quam minus minima.
                    </p>

                </div>
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