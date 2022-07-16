import { CircularProgress, Grid } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import useSWR from 'swr'
import { useSelector } from 'react-redux';
import { addHomeBlog, allData } from '../../dataSlice/dataSlice';
import BlogImageSingle from './BlogImageSingle';
import { motion } from 'framer-motion'
import fetcher from '../../util/fatcher';
import { useDispatch } from 'react-redux';



const HomeBlogImages = () => {
    const { scrollValue, homeBlog } = useSelector(allData);
    const wrapper2 = useRef();
    const wrapper = useRef();
    const dispatch = useDispatch()

    // const { data, error } = useSWR('https://stark-atoll-95180.herokuapp.com/blog?short=true', fetcher)

    // useEffect(() => {
    //     dispatch(addHomeBlog(data))
    // }, [data, dispatch])
    useEffect(() => {

        if (homeBlog?.length) {
            if (window.innerWidth <= 600) {
                wrapper.current.style.transform = `translate3d(0px, -${(scrollValue - 6) * 300}px, 0px)`
                wrapper2.current.style.transform = `translate3d(0px, ${(scrollValue - 6) * 200}px, 0px)`
            } else {
                wrapper.current.style.transform = `translate3d(0px, -${(scrollValue - 6) * 600}px, 0px)`
                wrapper2.current.style.transform = `translate3d(0px, ${(scrollValue - 6) * 600}px, 0px)`
            }


        }

    }, [scrollValue])
    // if (!homeBlog) {
    //     return <CircularProgress></CircularProgress>
    // }

    return (
        <motion.div exit={{ opacity: 0 }} className='h-full font-family-Helvetica text-justify'>
            <Grid container className='h-full' spacing={4}>
                <Grid item className='h-full' xs={6}>
                    <div ref={wrapper} className='blog-wrap  cursor-pointer'>
                        {
                            homeBlog?.slice(0, 5).map((single, i) => <BlogImageSingle key={i} {...single}></BlogImageSingle>
                            )
                        }
                    </div>
                </Grid>
                <Grid item xs={6} className=' h-full relative'>
                    <div ref={wrapper2} className='blog-wrap  cursor-pointer absolute second'>
                        {
                            homeBlog?.slice(0, 5).map((single, i) => <BlogImageSingle key={i} {...single}></BlogImageSingle>
                            )
                        }
                    </div>
                </Grid>
            </Grid>
        </motion.div>
    );
};

export default HomeBlogImages;