import { CircularProgress, Grid } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';

const HomeBlogImages = () => {
    const { scrollValue, homeCategory } = useSelector(allData);
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true);

    const wrapper = useRef();
    const wrapper2 = useRef();
    useEffect(() => {
        if (!loading) {

            wrapper.current.style.transform = `translate3d(0px, -${(scrollValue - 3) * 400}px, 0px)`
            wrapper2.current.style.transform = `translate3d(0px, ${(scrollValue - 3) * 350}px, 0px)`
        }

    }, [scrollValue])
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5000/blog?short=true')
            .then(res => {
                setBlogs(res.data)
                setLoading(false);

            })
    }, [])
    if (loading) {
        return <CircularProgress></CircularProgress>
    }

    return (
        <div className='h-full font-family-roboto text-justify'>
            <Grid container className='h-full' spacing={4}>
                <Grid item className='h-full' xs={6}>
                    <div ref={wrapper} className='blog-wrap  cursor-pointer'>
                        {
                            blogs.slice(0, 5).map((single, i) => <Link href={'/blogs/' + single._id} key={i}>
                                <div className='  pb-10 '>

                                    <Image className='rounded-xl  ' src={single.img} width={400} height={500} alt='Blog Image'></Image>
                                    <div >
                                        <p className=' '>
                                            {single.heading.slice(0, 35)}
                                        </p>

                                    </div>
                                </div>
                            </Link>
                            )
                        }
                    </div>
                </Grid>
                <Grid item xs={6} className=' h-full relative'>
                    <div ref={wrapper2} className='blog-wrap  cursor-pointer absolute second'>
                        {
                            blogs.slice(0, 10).map((single, i) => <Link href={'/blogs/' + single._id} key={i}>
                                <div className='  pb-10  '>

                                    <Image className='rounded-xl  ' src={single.img} width={400} height={500} alt='Blog Image'></Image>
                                    <div >
                                        <p className=' '>
                                            {single.heading.slice(0, 35)}
                                        </p>

                                    </div>
                                </div>
                            </Link>
                            )
                        }
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default HomeBlogImages;