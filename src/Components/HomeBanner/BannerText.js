import React from 'react';
import { motion } from 'framer-motion';
let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.15
        }
    }
};
const fadeInUp = {
    initial: {
        opacity: 0,
        transition: { duration: 0.6, }
    },
    animate: {
        opacity: 1,
        scale: [1, 2, 2, 1, 1,],
        transition: {
            duration: 1.5,
        }
    }
};
const twing = {
    initial: {
        y: "200%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    animate: {
        y: 0,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
}
const popIn = {
    initial: {
        x: "-200%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    animate: {
        x: 0,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
}
const BannerText = () => {
    return (
        <motion.div initial='initial' animate='animate' className=' font-bold' exit={{ opacity: 0 }}>
            <motion.div variants={stagger} >
                {/* <div className='text-8xl overflow-hidden'>
                    {
                        ['H', 'i'].map((single, i) => <motion.span className='inline-block' key={i} variants={twing}>{single}</motion.span>)
                    }
                </div> */}
                {/* <div className='text-6xl block overflow-hidden'>
                    {
                        ['I'].map((single, i) => <motion.span className='inline-block' key={i} variants={twing}>{single}</motion.span>)
                    }
                    <div className='ml-3 inline-block'>
                        {
                            ['a', 'm'].map((single, i) => <motion.span className='inline-block' key={i} variants={twing}>{single}</motion.span>)
                        }
                    </div>
                    <div className='ml-3 inline-block'>
                        {
                            ['J', 'o', 'h', 'n'].map((single, i) => <motion.span className='inline-block' key={i} variants={twing}>{single}</motion.span>)
                        }
                    </div>
                </div> */}
                <div className='text-6xl block overflow-hidden' >
                    <motion.div variants={twing}>

                        Hi
                    </motion.div>

                </div>
                <div className='mt-3 text-6xl block overflow-hidden' >
                    <motion.div className='inline-block  ' variants={twing}>

                        I
                    </motion.div>
                    <motion.div className='inline-block ml-3' variants={twing}>

                        am
                    </motion.div>
                    <motion.div className='inline-block ml-3 text-yellow-400' variants={twing}>

                        John
                    </motion.div>
                    <motion.div className='inline-block ml-3  text-yellow-400' variants={twing}>

                        Baggen
                    </motion.div>

                </div>
                <div className='mt-3  block overflow-hidden text-5xl' >
                    <motion.div className='inline-block  ' variants={twing}>
                        Professional
                    </motion.div>
                    <motion.div className='inline-block ml-3' variants={twing}>
                        photographer
                    </motion.div>

                </div>
                <div className='mt-5 overflow-hidden'>
                    <motion.div className='inline-block  text-xl border-b-2 border-yellow-300' variants={popIn}>
                        lets go {"->"}
                    </motion.div>

                </div>
            </motion.div>
        </motion.div>
    );
};

export default BannerText;