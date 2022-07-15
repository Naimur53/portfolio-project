import HomeBanner from "../src/Components/HomeBanner/HomeBanner";
import HomeCategory from "../src/Components/HomeCategory/HomeCategory"
import { addHomeCategory, addScrollValue } from '../src/dataSlice/dataSlice'
import { wrapper } from "../src/store/store";
import { motion } from "framer-motion";
import { Container, Grid, Typography, Button } from "@mui/material";
import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import CheckBanner from "../src/Components/HomeBanner/CheckBanner";
import Image from "next/image";
import AboutMe from "../src/Components/AboutMe/AboutMe";
import HomeBlog from "../src/Components/HomeBlog/HomeBlog";
import ContactMe from "../src/Components/ContactMe/ContactMe";
import HomeTextSection from "../src/Components/HomeTextSection/HomeTextSection";
import Head from '../src/Components/Head/Head'

export default function Home() {
  const dispatch = useDispatch()
  const parallaxRef = useRef()

  const innerRoute = (value) => {
    parallaxRef.current.scrollTo(value);
  }
  useEffect(() => {
    if (!parallaxRef.current || !parallaxRef.current.container) return
    parallaxRef.current.container.current.onscroll = () => {
      dispatch(addScrollValue(parallaxRef.current.current / parallaxRef.current.space))
    }
    return () => {
      console.log('ic clalsd');
      return dispatch(addScrollValue(0))
    }
  })
  return (
    <>
      <Head
        title="John Baggen"
      ></Head>
      <Parallax ref={parallaxRef} pages={10}>
        <ParallaxLayer
          offset={0}
          speed={.1}  >
          <HomeBanner innerRoute={innerRoute}></HomeBanner>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={.1}>
          <HomeTextSection></HomeTextSection>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={.5}
          sticky={{ start: 2, end: 4 }}
        >
          <Container className="">

            <AboutMe></AboutMe>
          </Container>
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          factor={1.3}
          speed={.5}
        >
          <HomeCategory></HomeCategory>
        </ParallaxLayer>

        <ParallaxLayer
          offset={6}
          speed={5}
          sticky={{ start: 6, end: 8 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
          }}>
          <HomeBlog></HomeBlog>
          <div className=" md:flex hidden overlay-wrap pointer-events-none absolute flex-col justify-between inset-0">
            <div  ></div>
            <div  ></div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={9}
          speed={.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <ContactMe></ContactMe>
        </ParallaxLayer>
      </Parallax >
    </>
  )
}
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://stark-atoll-95180.herokuapp.com/category`)
//   const data = await res.json()
//   console.log('server', res);

//   // Pass data to the page via props
//   return { props: { data } }
// } 
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const res = await fetch(`https://stark-atoll-95180.herokuapp.com/category?short=true`)
    const data = await res.json();
    store.dispatch(addHomeCategory(data))
  })