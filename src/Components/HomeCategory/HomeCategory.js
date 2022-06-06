import { useSelector } from 'react-redux';
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
import { allData } from '../../dataSlice/dataSlice';
import { motion } from "framer-motion";
import { Container, Grid } from '@mui/material';
import Image from 'next/image';
import { useRef } from 'react';
const HomeCategory = () => {
    const { homeCategory } = useSelector(allData)
    const canvasRef = useRef()
    const container = useRef()
    const handleMouseMove = e => {
        let x = e.clientX - container.current.getBoundingClientRect().left
        let y = e.clientY - container.current.getBoundingClientRect().top

        canvasRef.current.style.transform = `translate(-${x}px,-${y}px)`
    }
    return (
        <div onMouseMove={handleMouseMove} ref={container} className='overflow-hidden border   relative h-screen w-full  '>
            <div ref={canvasRef} className='canvas '>

                <Grid container spacing={2} >
                    <Grid item md={3} className="column one">
                        {
                            homeCategory[0].photos.slice(0, 5)?.map(single => <Image priority key={single.url} width={200} height={200} layout={'raw'} src={single.url} className='pb-4 block w-full grayscale hover:grayscale-0' alt='Image' ></Image>)
                        }
                    </Grid>
                    <Grid item md={3} className="column tow">
                        {
                            homeCategory[0].photos.slice(5, 10)?.map(single => <Image priority key={single.url} width={200} height={200} layout={'raw'} src={single.url} className='pb-4 block w-full  grayscale hover:grayscale-0' alt='Image' ></Image>)
                        }
                    </Grid>
                    <Grid item md={3} className="column there">
                        {
                            homeCategory[0].photos.slice(10, 15)?.map(single => <Image priority key={single.url} width={200} height={200} layout={'raw'} src={single.url} className='pb-4 block w-full  grayscale hover:grayscale-0' alt='Image' ></Image>)
                        }
                    </Grid>
                    <Grid item md={3} className="column four">
                        {
                            homeCategory[0].photos.slice(20, 25)?.map(single => <Image priority key={single.url} width={200} height={200} layout={'raw'} src={single.url} className='pb-4 block w-full  grayscale hover:grayscale-0 transition' alt='Image' ></Image>)
                        }
                    </Grid>
                </Grid>
            </div>

        </div>
    );
};


export default HomeCategory;