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


export default function Home() {
  const dispatch = useDispatch()
  const parallaxRef = useRef()
  console.log(parallaxRef);


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
    <Parallax ref={parallaxRef} pages={6}>
      <ParallaxLayer
        offset={0}
        speed={.5}
        factor={1} >
        <HomeBanner></HomeBanner>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={.5}  >

        <AboutMe></AboutMe>
      </ParallaxLayer>

      {/* <ParallaxLayer
        sticky={{ start: 2, end: 3 }}
        style={{ display: 'flex', width: '50%', alignItems: 'center', justifyContent: 'center' }}>
        <div className="bg-green-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, dolorum vitae magnam veniam exercitationem soluta ut doloremque animi molestiae officiis consequatur tempora earum maxime! Necessitatibus repellat temporibus officiis nihil a!

        </div>
      </ParallaxLayer> */}

      <ParallaxLayer
        offset={2}
        speed={.5}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}>
        <HomeCategory></HomeCategory>
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={.5}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}>
        <p>Scroll up2</p>
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={.5}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}>
        <p>Scroll up3</p>
      </ParallaxLayer>


      {/* <ParallaxProvider pages={2}>
        <Parallax speed={-5} >
          <div className="slow bg-green-400 h-screen"  > slow</div>
        </Parallax>
        <Parallax speed={150} translateX={['-400px', '0px']}
          scale={[0.75, 1]}
          rotate={[-180, 0]}
          easing="easeInQuad">
          <div className="fast bg-red-400 h-screen"  > fast </div>
        </Parallax>
      </ParallaxProvider> */}
      {/* <motion.div exit={{ opacity: 0 }}>
        <HomeBanner></HomeBanner>
        <HomeCategory></HomeCategory>

      </motion.div> */}
    </Parallax >
  )
}
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:5000/category`)
//   const data = await res.json()
//   console.log('server', res);

//   // Pass data to the page via props
//   return { props: { data } }
// }
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const res = await fetch(`http://localhost:5000/category`)
    const data = await res.json();
    store.dispatch(addHomeCategory(data))
  })