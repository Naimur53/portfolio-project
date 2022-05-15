import React from 'react';
import { Box } from '@mui/material'
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
            <div className='flex '>
                {
                    data.photos.map(res => <div key={res._id} className='flex flex-col'><Image src={res.url} height={200} width={200} alt='photo'></Image> <h1>{res.name}</h1></div>)
                }
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