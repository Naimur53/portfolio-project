import React from 'react';
import { Box, Container, Grid } from '@mui/material'
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
const CategoryDetails = ({ data }) => {
    console.log(data);
    return (
        <motion.div exit={{ opacity: 0 }}>
            <Box
                sx={{
                    backgroundImage: `url("${data.thumbnail}")`,
                    height: '50vh',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <Link href='/'>Home </Link>
            </Box>
            <Container>
                <Grid container>
                    {
                        data.photos.map(res => <Grid md={3} key={res._id}><div className='flex flex-col'><Image src={res.url} height={200} width={200} alt='photo'></Image> <h1>{res.name}</h1></div></Grid>)
                    }
                </Grid>
            </Container>
            <div className='flex '>

            </div>
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