import { ParallaxLayer } from "@react-spring/parallax";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
const ParallaxLayerBackground = ({
  noBackground,
  className,
  factor,
  offset,
  url,
  speed,
  style,
}) => {
  const [ref, inView] = useInView();

  return (
    <ParallaxLayer
      offset={offset}
      speed={speed}
      style={style}
      factor={factor ? factor : 1}
    >
      <div
        style={{
          backgroundImage: noBackground
            ? ""
            : url
            ? `url(${url})`
            : "url(https://i.ibb.co/n7xmh1M/NEW-Background.jpg)",
        }}
        className={
          className
            ? "banner-wrap bg-cover h-full w-full pointer-events-none " +
              className
            : "banner-wrap bg-cover h-full w-full pointer-events-none"
        }
      >
        <div ref={ref} className="w-full flex h-full items-end   ">
          {
            <motion.div
              className="relative w-full"

              // initial={{
              //     width: '0%'
              // }}
              // animate={inView ? {
              //     width: '100%',
              //     transition: { type: 'ease', duration: 1 }
              // } : {
              //     width: '0%'
              // }}
            >
              <img
                className="w-full mt-15  "
                src="https://i.ibb.co/R0ngLrJ/Adobe-Stock-477001574-kopi-ren.png"
                width={700}
                height={100}
                alt="background web"
                priority
                layout="raw"
              ></img>

              <motion.div
                className="bg-black absolute inset-0 shadow-overlay"
                initial={{
                  x: " 0%",
                }}
                animate={
                  inView
                    ? {
                        x: "100%",
                        transition: { type: "ease", duration: 1 },
                      }
                    : {
                        x: " 0%",
                      }
                }
              ></motion.div>
            </motion.div>
          }
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default ParallaxLayerBackground;
