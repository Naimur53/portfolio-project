import HomeBanner from "../src/Components/HomeBanner/HomeBanner";
import HomeCategory from "../src/Components/HomeCategory/HomeCategory";
import {
  addCollection,
  addHomeBlog,
  addHomeCategory,
  addScrollValue,
} from "../src/dataSlice/dataSlice";
import { wrapper } from "../src/store/store";
import { motion } from "framer-motion";
import { Container, Grid, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import AboutMe from "../src/Components/AboutMe/AboutMe";
import HomeBlog from "../src/Components/HomeBlog/HomeBlog";
import HomeTextSection from "../src/Components/HomeTextSection/HomeTextSection";
import Head from "../src/Components/Head/Head";
import Footer from "../src/Components/AboutPages/Footer";
import ParallaxLayerBackground from "../src/Components/ParallaxLayerBackground/ParallaxLayerBackground";
import ContactSections from "../src/Components/ContactSections/ContactSections";

export default function Home() {
  const dispatch = useDispatch();
  const parallaxRef = useRef();

  const innerRoute = (value) => {
    parallaxRef.current.scrollTo(value);
  };
  useEffect(() => {
    if (!parallaxRef.current || !parallaxRef.current.container) return;
    parallaxRef.current.container.current.onscroll = () => {
      dispatch(
        addScrollValue(parallaxRef.current.current / parallaxRef.current.space)
      );
    };
    return () => {
      return dispatch(addScrollValue(0));
    };
  });
  return (
    <>
      <Head title="John Baggen"></Head>
      <Parallax ref={parallaxRef} pages={6}>
        <ParallaxLayer offset={0} speed={0.1}>
          <HomeBanner innerRoute={innerRoute}></HomeBanner>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{ zIndex: "-1" }}
        ></ParallaxLayer>
        <ParallaxLayerBackground
          offset={0}
          noBackground={true}
          speed={0.1}
          url="https://i.ibb.co/n7xmh1M/NEW-Background.jpg"
          style={{ zIndex: "-1" }}
        />
        <ParallaxLayer offset={1} speed={0.1}>
          <HomeTextSection innerRoute={innerRoute}></HomeTextSection>
        </ParallaxLayer>
        <ParallaxLayerBackground
          offset={1}
          speed={0.1}
          url="https://i.ibb.co/n7xmh1M/NEW-Background.jpg"
          style={{ zIndex: "-1" }}
        />
        <ParallaxLayer offset={2} speed={0.5} sticky={{ start: 2, end: 3 }}>
          <AboutMe innerRoute={innerRoute}></AboutMe>
        </ParallaxLayer>
        <ParallaxLayerBackground
          offset={2}
          speed={0.5}
          style={{ zIndex: "-1" }}
        />
        <ParallaxLayerBackground
          offset={3}
          speed={0.5}
          style={{ zIndex: "-1" }}
        />
        {/* <ParallaxLayerBackground
          offset={4}
          speed={.5}
          style={{ zIndex: '-1' }}
        /> */}

        {/* <ParallaxLayer
          offset={5}
          factor={1.3}
          speed={.5}
        >
          <HomeCategory></HomeCategory>
        </ParallaxLayer> */}

        {/* <ParallaxLayer
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
        </ParallaxLayer> */}
        <ParallaxLayerBackground
          offset={4}
          speed={0.5}
          style={{ zIndex: "-1" }}
        />
        {/* <ParallaxLayer
          offset={9}
          speed={.3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}

        >
          <ContactMe></ContactMe>
        </ParallaxLayer> */}
        <ParallaxLayer
          offset={4}
          speed={0.3}
          sticky={{ start: 4, end: 5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ContactSections></ContactSections>
        </ParallaxLayer>

        <ParallaxLayerBackground
          offset={5}
          speed={0.3}
          style={{ zIndex: "-1" }}
        />
      </Parallax>
    </>
  );
}
