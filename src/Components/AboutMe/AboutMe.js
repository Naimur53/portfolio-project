import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';
import CategorySlider from '../CategorySlider/CategorySlider';

const AboutMe = () => {
    const { homeCategory } = useSelector(allData)
    return (
        <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
                <Box
                    className="w-full bg-red-400 bg-cover bg-center"
                    sx={{
                        background: 'url(https://i.ibb.co/njLJtgJ/20190320-WEST-AFRICA-FROM-GUNJUR-TO-BASSE-2964.jpg)',
                        height: '60vh'
                    }}

                >

                </Box>
            </Grid>
            <Grid item xs={6} md={6}>
                <div className='h-full px-10 bg-gray-900'>
                    <h1 className='text-2xl text-justify pt-5'>About Me</h1>
                    <hr className='w-10 mt-5' />
                    <p className='mt-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sit tempore repellat? Aliquid sequi laborum a dolore adipisci provident quam harum error deserunt consequuntur excepturi recusandae sint, similique doloremque voluptatum!</p>
                    <p className='mt-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sit tempore repellat? Aliquid sequi laborum a dolore adipisci provident quam harum error deserunt consequuntur excepturi recusandae sint, similique doloremque voluptatum!</p>
                    <button className='mt-5  border-b'>Hire me &gt;</button>

                </div>
            </Grid>
            <Grid item xs={5} md={5}>
                <div style={{
                    height: '40vh'
                }} className='h-full  '>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={6}>
                            {/* <div style={{ height: "20vh", backgroundImage: 'url(https://i.ibb.co/DbPW9BL/West-africa009.jpg)' }} className=" bg-cover bg-center">
                            </div> */}
                            <CategorySlider delay={2000} data={homeCategory[0].photos.slice(0, 10)}></CategorySlider>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            {/* <div style={{ height: "20vh", backgroundImage: 'url(https://i.ibb.co/ncCZrKN/20180927-BOSNIE-LUKOMIR-488.jpg)' }} className=" bg-cover bg-center">
                            </div> */}
                            <CategorySlider delay={2500} data={homeCategory[0].photos.slice(10, 20)}></CategorySlider>
                        </Grid>
                        <Grid item xs={6} md={12}>
                            <div style={{ height: "20vh", backgroundImage: 'url(https://www.johnbaggen.gallery/wp-content/uploads/2015/11/20161021-AIT-BEN-HABBOU-351-Pano.jpg)' }} className=" bg-cover bg-center">
                            </div>

                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid item xs={3} md={3}>
                {/* <div style={{ height: "40vh", backgroundImage: 'url(https://www.johnbaggen.gallery/wp-content/uploads/2021/01/20180211-ROEMENIE-BOEKAREST-109-Pano.jpg)' }} className=" bg-cover bg-center">
                </div> */}
                <CategorySlider delay={3000} data={homeCategory[0].photos.slice(20, 30)}></CategorySlider>
                <CategorySlider delay={3000} data={homeCategory[0].photos.slice(20, 30)}></CategorySlider>
            </Grid>
            <Grid item xs={4} md={4}>
                <div style={{ height: "40vh", backgroundImage: 'url(https://www.johnbaggen.gallery/wp-content/uploads/2021/01/20180212-ROEMENIE%CC%88-VISCRI-063-1536x1024.jpg)' }} className=" bg-cover bg-center">
                </div>
                <div style={{ height: "20vh", backgroundImage: 'url(https://www.johnbaggen.gallery/wp-content/uploads/2019/04/20150116-BONAIRE-WASHINGTON-SLAGBAAI-044.jpg)' }} className=" bg-cover bg-center">
                </div>
            </Grid>


        </Grid>
    );
};

export default AboutMe;