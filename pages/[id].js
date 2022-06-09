import React from 'react';
import { Box, Container, Grid } from '@mui/material'
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
const CategoryDetails = ({ data }) => {
    console.log(data);
    const handleScroll = e => {
    }
    return (
        <motion.div exit={{ opacity: 0 }}>
            <Box
                // onScroll={handleScroll}
                onWheel={handleScroll}
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
                {/* <div className="  relative flex justify-center mt-20">

                    <div className='g-wrap bg-red-500'>
                        {
                            data?.photos?.map((res, i) => <div style={{ "--i": i + 2 }} key={res.url}>
                                <Image priority layout='raw' src={res.url} height={200} width={200} alt='photo'></Image>
                            </div>)
                        }
                    </div>
                </div> */}
                <Grid container spacing={2}>
                    {
                        data.photos.map(res => <Grid item md={3} key={res._id}><Image priority layout='raw' src={res.url} height={200} width={200} alt='photo'></Image><div className='flex flex-col'><h1>{res.name}</h1></div></Grid>)
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