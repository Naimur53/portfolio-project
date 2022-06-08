import { Grid } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';

const HomeBlogImages = () => {
    const { scrollValue, homeCategory } = useSelector(allData);
    const wrapper = useRef();
    const wrapper2 = useRef();
    useEffect(() => {
        console.log((scrollValue - 4) * 500);
        wrapper.current.style.transform = `translate3d(0px, -${(scrollValue - 3) * 500}px, 0px)`
        wrapper2.current.style.transform = `translate3d(0px, ${(scrollValue - 3) * 500}px, 0px)`

    }, [scrollValue])

    return (
        <div className='h-full'>
            <Grid container className='h-full' spacing={4}>
                <Grid item className='h-full' xs={6}>
                    <div ref={wrapper} className='blog-wrap'>
                        {
                            homeCategory.slice(0, 5).map(single => <div key={single.thumbnail} className='pb-10'>

                                <Image className='rounded-xl pb-10' src={single.thumbnail} width={400} height={600} alt='Blog Image'></Image>
                            </div>
                            )
                        }
                    </div>
                </Grid>
                <Grid item xs={6} className=' h-full relative'>
                    <div ref={wrapper2} className='blog-wrap absolute second'>
                        {
                            homeCategory.slice(5, 10).map(single => <div key={single.thumbnail} className='pb-10'>

                                <Image className='rounded-xl  ' src={single.thumbnail} width={400} height={600} alt='Blog Image'></Image>
                            </div>
                            )
                        }
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default HomeBlogImages;