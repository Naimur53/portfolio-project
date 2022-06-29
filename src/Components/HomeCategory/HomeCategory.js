import { useSelector } from 'react-redux';
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
import { allData } from '../../dataSlice/dataSlice';
import { motion } from "framer-motion";
import { Container, Grid } from '@mui/material';
import Image from 'next/image';
import { forwardRef, useEffect, useRef, useState } from 'react';
import HomeCategoryImg from './HomeCategoryImg';
import MgButton from '../SmallComponents/MgButton';
import { useRouter } from 'next/router';

const HomeCategory = () => {
    const router = useRouter()
    const [allImages, setAllImages] = useState([]);
    const [mp, setMp] = useState({ x: 0, y: 0 })
    useEffect(() => {

        setAllImages(document.querySelectorAll('.js'))
    }, [])
    const { homeCategory } = useSelector(allData)
    const canvasRef = useRef()
    const container = useRef()
    const handleMouseMove = e => {
        let x = e.clientX - container.current.getBoundingClientRect().left
        let y = e.clientY - container.current.getBoundingClientRect().top
        setMp({ x: -(x / 1.5), y: -(y * 2) });
        // canvasRef.current.style.transform = `translate3d(-${x / 1.5}px,-${y * 2}px,0px) scaleX(1) `;
        // 
        e.stopPropagation();

    }
    const handleMouseLeave = e => {
        // let x = 500
        // let y = 500
        // canvasRef.current.style.transform = `translate3d(-${x}px,-${y}px,0px) scaleX(1) `;
        // // 
        // e.stopPropagation();

    }
    const handleClick = () => {
        router.push('/category')
    }
    return (
        <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} ref={container} className='overflow-hidden   relative h-screen w-full   '>
            <motion.div ref={canvasRef} animate={{
                x: mp.x,
                y: mp.y,
                transition: { ease: "easeOut", duration: 1 }
            }} className='canvas canvas-animation'>
                <Grid container spacing={15} >

                    <Grid item xs={12} md={3} className="column one">
                        {
                            homeCategory.slice(0, 5)?.map((single, i) => <HomeCategoryImg mp={mp} {...single} key={single.thumbnail}></HomeCategoryImg>)
                        }
                    </Grid>
                    <Grid item xs={12} md={3} className="column tow">
                        {
                            homeCategory.slice(5, 10)?.map(single => <HomeCategoryImg mp={mp}  {...single} key={single.thumbnail}></HomeCategoryImg>)
                        }
                    </Grid>
                    <Grid item xs={12} md={3} className="column there">
                        {
                            homeCategory.slice(10, 15)?.map(single => <HomeCategoryImg mp={mp}  {...single} key={single.thumbnail}></HomeCategoryImg>)
                        }
                    </Grid>
                    <Grid item md={3} xs={12} className="column four">
                        {
                            homeCategory.slice(15, 20)?.map(single => <HomeCategoryImg mp={mp}  {...single} key={single.thumbnail}></HomeCategoryImg>)
                        }
                    </Grid>
                </Grid>

            </motion.div>
            <div className='absolute pointer-events-none font-semibold	 flex justify-center items-center font-sans inset-0 capitalize font-family-roboto font-lighter'>
                <div className='text-center'>
                    <h2 className='text-4xl font-family-allerta '>Photo Collection </h2>
                    <h2 className='text-4xl font-family-allerta '>After traveling many Country I Found this </h2>
                    <div className='flex justify-center mt-5 pointer-events-auto'>
                        <MgButton buttonProps={{ onClick: () => handleClick() }} text='Watch more'></MgButton>
                    </div>
                </div>


            </div>

        </div>
    );
};


export default HomeCategory;