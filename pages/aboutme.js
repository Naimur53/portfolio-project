import { Container } from '@mui/material';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useDispatch, } from 'react-redux';
import AboutBanner from '../src/Components/AboutPages/AboutBanner';
import AboutTextArea from '../src/Components/AboutPages/AboutTextArea';
import Middle from '../src/Components/AboutPages/Middle';
import MiddleVideo from '../src/Components/AboutPages/MiddleVideo';
import { addScrollValue, allData } from '../src/dataSlice/dataSlice';

const Aboutme = () => {
    const dispatch = useDispatch()
    const parallaxRef = useRef()


    useEffect(() => {
        if (!parallaxRef.current || !parallaxRef.current.container) return
        parallaxRef.current.container.current.onscroll = () => {
            dispatch(addScrollValue(parallaxRef.current.current / parallaxRef.current.space))
        }
        return () => {
            return dispatch(addScrollValue(0))
        }
    })

    return (
        <Parallax ref={parallaxRef} pages={6}>

            <ParallaxLayer
                offset={0}
                speed={.5}
            >
                <Container className='h-full flex  items-center'>


                    <AboutBanner></AboutBanner>
                </Container>
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                speed={.5}
                sticky={{ start: 0, end: 3 }}
                style={{
                    zIndex: -1
                }}
            >
                <Middle></Middle>
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                speed={.5}
                sticky={{ start: 2.4, end: 6 }}
            >
                <MiddleVideo></MiddleVideo>
            </ParallaxLayer>
            <ParallaxLayer
                offset={1}
                speed={.5}
            >


                <AboutTextArea></AboutTextArea>
            </ParallaxLayer>



        </Parallax>
    );
};

export default Aboutme;