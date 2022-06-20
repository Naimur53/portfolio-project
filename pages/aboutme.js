import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AboutBanner from '../src/Components/AboutPages/AboutBanner';
import AboutTextArea from '../src/Components/AboutPages/AboutTextArea';
import { addScrollValue, allData } from '../src/dataSlice/dataSlice';

const aboutme = () => {
    const { scrollValue } = useSelector(allData)
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
        <Parallax
            ref={parallaxRef}
            pages={2}>
            <ParallaxLayer
                offset={0}
                speed={.5}
            >
                <AboutBanner></AboutBanner>
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

export default aboutme;