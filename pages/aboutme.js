import { Container } from '@mui/material';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useEffect, useRef } from 'react';
import { useDispatch, } from 'react-redux';
import AboutBanner from '../src/Components/AboutPages/AboutBanner';
import AboutTextArea from '../src/Components/AboutPages/AboutTextArea';
import { addScrollValue, allData } from '../src/dataSlice/dataSlice';

const Aboutme = () => {
    // const dispatch = useDispatch()
    // const parallaxRef = useRef()


    // useEffect(() => {
    //     if (!parallaxRef.current || !parallaxRef.current.container) return
    //     parallaxRef.current.container.current.onscroll = () => {
    //         dispatch(addScrollValue(parallaxRef.current.current / parallaxRef.current.space))
    //     }
    //     return () => {
    //         return dispatch(addScrollValue(0))
    //     }
    // })

    return (
        < >
            <AboutBanner></AboutBanner>
            <AboutTextArea></AboutTextArea>


        </>
    );
};

export default Aboutme;