import { useSelector } from 'react-redux';
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
import { allData } from '../../dataSlice/dataSlice';
import { motion } from "framer-motion";
import { Container, Grid } from '@mui/material';
import Image from 'next/image';
import { forwardRef, useEffect, useRef, useState } from 'react';
import HomeCategoryImg from './HomeCategoryImg';

const HomeCategory = () => {
    const [allImages, setAllImages] = useState([]);
    useEffect(() => {

        setAllImages(document.querySelectorAll('.js'))
    }, [])
    const { homeCategory } = useSelector(allData)
    const canvasRef = useRef()
    const container = useRef()
    const handleMouseMove = e => {
        let x = e.clientX - container.current.getBoundingClientRect().left
        let y = e.clientY - container.current.getBoundingClientRect().top
        canvasRef.current.style.transform = `translate3d(-${x / 1.5}px,-${y * 2}px,0px) scaleX(1) `;
        // allImages.forEach(ele => {
        //     ele.style.transform = `translate3d(-${x / 25}px,-${y / 25}px,0px) `
        // })
        e.stopPropagation();

    }
    const handleMouseLeave = e => {
        let x = 500
        let y = 500
        canvasRef.current.style.transform = `translate3d(-${x}px,-${y}px,0px) scaleX(1) `;
        allImages.forEach(ele => {
            ele.style.transform = `translate3d(-${x / 25}px,-${y / 10}px,0px) `
        })
        e.stopPropagation();

    }
    return (
        <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} ref={container} className='overflow-hidden   relative h-screen w-full  '>
            <div ref={canvasRef} className='canvas '>
                <Grid container spacing={15} >

                    <Grid item md={3} className="column one">
                        {
                            homeCategory.slice(0, 5)?.map((single, i) => <HomeCategoryImg {...single} key={single.thumbnail}></HomeCategoryImg>)
                        }
                    </Grid>
                    <Grid item md={3} className="column tow">
                        {
                            homeCategory.slice(5, 10)?.map(single => <HomeCategoryImg {...single} key={single.thumbnail}></HomeCategoryImg>)
                        }
                    </Grid>
                    <Grid item md={3} className="column there">
                        {
                            homeCategory.slice(10, 15)?.map(single => <HomeCategoryImg {...single} key={single.thumbnail}></HomeCategoryImg>)
                        }
                    </Grid>
                    <Grid item md={3} className="column four">
                        {
                            homeCategory.slice(15, 20)?.map(single => <HomeCategoryImg {...single} key={single.thumbnail}></HomeCategoryImg>)
                        }
                    </Grid>
                </Grid>

            </div>
            <div className='absolute pointer-events-none font-semibold	 flex justify-center items-center font-sans inset-0 capitalize font-family-roboto font-lighter'>
                <div className='text-center'>
                    <h2 className='text-4xl '>Photo Collection </h2>
                    <h2 className='text-4xl '>After traveling many Country I Found this </h2>
                    <h2 className='text-xl mt-3 pb-2 inline-block border-b-2 '> Watch more {'->'}</h2>
                </div>


            </div>

        </div>
    );
};


export default HomeCategory;