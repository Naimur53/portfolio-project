import HomeBanner from "../src/Components/HomeBanner/HomeBanner";
import HomeCategory from "../src/Components/HomeCategory/HomeCategory"
import { addCollection, addHomeBlog, addHomeCategory, addScrollValue } from '../src/dataSlice/dataSlice'
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
import Footer from "../src/Components/AboutPages/Footer";

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
      <Parallax ref={parallaxRef} pages={11}>
        <ParallaxLayer
          offset={0}
          speed={.3}  >
          <HomeBanner innerRoute={innerRoute}></HomeBanner>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={.5}
          style={{ zIndex: '-1' }}
        >
          <div
            className="banner-wrap h-full w-full">
            <div className='w-full flex items-end  h-full relative'>

              <Image className='w-full mt-5' src='https://i.ibb.co/g3d0nbF/Adobe-Stock-477001574.jpg' width={700} height={100} alt='background web' priority layout='raw'></Image>

              <motion.div
                className='bg-black absolute inset-0'
                initial={{
                  x: ' 0%'
                }}
                animate={{
                  x: '100%',
                  transition: { type: 'ease', delay: 1, duration: 1 }
                }}
              >

              </motion.div>

            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={.3}>
          <HomeTextSection innerRoute={innerRoute}></HomeTextSection>

        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={.5}
          style={{ zIndex: '-1' }}
        >
          <div
            className="bg-lather h-full w-full">

          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={.5}
          sticky={{ start: 2, end: 4 }}
        >
          <AboutMe innerRoute={innerRoute}></AboutMe>

        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={.5}
          style={{ zIndex: '-1' }}
        >
          <div
            className="bg-light-dot h-full w-full">

          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={.5}
          style={{ zIndex: '-1' }}
        >
          <div
            className="bg-dot-wev  h-full w-full">

          </div>
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
          speed={.1}
        >
          <div className="bg-lather relative h-full shadow-overlay  ">
            <div className="h-8 absolute top-0 left-0 right-0 bg-black shadow-overlay"></div>
            <div className="h-8 absolute bottom-0 left-0 right-0 bg-black shadow-overlay"></div>
          </div>

        </ParallaxLayer>
        <ParallaxLayer
          offset={9}
          speed={.3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}

        >
          <ContactMe></ContactMe>
        </ParallaxLayer>
        <ParallaxLayer
          offset={10}
          speed={.5}
          style={{
          }}
        >
          <div className="bg-dot-wev relative h-full shadow-overlay  ">
            <div className="h-8 absolute top-0 left-0 right-0 bg-black shadow-overlay"></div>
          </div>

        </ParallaxLayer>
        <ParallaxLayer
          offset={10}
          speed={.3}
          style={{
          }}
        >
          <div className="h-full fl ex  items-center">

            <Container>
              <Footer></Footer>
            </Container>
          </div>


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
    const allUrl = [fetch(`https://stark-atoll-95180.herokuapp.com/category?short=true`), fetch(`https://stark-atoll-95180.herokuapp.com/chooseMenu`), fetch('https://stark-atoll-95180.herokuapp.com/blog?short=true')]
    const [res1, res2, res3] = await Promise.all(allUrl)
    // const datas = await res.map(single => single.json());
    console.log({ res1 });
    const category = await res1.json()
    const collection = await res2.json()
    const blogs = await res3.json()

    store.dispatch(addHomeCategory(category))
    store.dispatch(addCollection(collection))
    store.dispatch(addHomeBlog(blogs))
  })