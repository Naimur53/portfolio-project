import { CircularProgress, Grid } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';
import BlogImageSingle from './BlogImageSingle';
import { motion } from 'framer-motion'
const HomeBlogImages = () => {
    const { scrollValue, } = useSelector(allData);
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true);

    const wrapper = useRef();
    const wrapper2 = useRef();
    useEffect(() => {

        if (!loading) {
            if (window.innerWidth <= 600) {
                wrapper.current.style.transform = `translate3d(0px, -${(scrollValue - 4) * 300}px, 0px)`
                wrapper2.current.style.transform = `translate3d(0px, ${(scrollValue - 4) * 200}px, 0px)`
            } else {
                wrapper.current.style.transform = `translate3d(0px, -${(scrollValue - 4) * 300}px, 0px)`
                wrapper2.current.style.transform = `translate3d(0px, ${(scrollValue - 4) * 300}px, 0px)`
            }


        }

    }, [scrollValue])
    useEffect(() => {
        setLoading(true);
        axios.get('https://stark-atoll-95180.herokuapp.com/blog?short=true')
            .then(res => {
                setBlogs(res.data)
                setLoading(false);

            })
    }, [])
    if (loading) {
        return <CircularProgress></CircularProgress>
    }

    return (
        <motion.div exit={{ opacity: 0 }} className='h-full font-family-roboto text-justify'>
            <Grid container className='h-full' spacing={4}>
                <Grid item className='h-full' xs={6}>
                    <div ref={wrapper} className='blog-wrap  cursor-pointer'>
                        {
                            blogs.slice(0, 5).map((single, i) => <BlogImageSingle key={i} {...single}></BlogImageSingle>
                            )
                        }
                    </div>
                </Grid>
                <Grid item xs={6} className=' h-full relative'>
                    <div ref={wrapper2} className='blog-wrap  cursor-pointer absolute second'>
                        {
                            blogs.slice(0, 10).map((single, i) => <BlogImageSingle key={i} {...single}></BlogImageSingle>
                            )
                        }
                    </div>
                </Grid>
            </Grid>
        </motion.div>
    );
};

export default HomeBlogImages;