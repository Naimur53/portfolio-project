import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ImgSlider from '../ImgSlider/ImgSlider';

const BlogSection = ({ data }) => {
    console.log(data);
    const { description, img, title, video } = data
    let Des = [];
    if (description.length >= 300) {
        const lines = description.split('.')
        const len = Math.ceil(lines.length / 10)
        console.log(len);
        for (let i = 1; i <= len; i++) {
            Des = [...Des,
            <p className='mt-4' key={i}>{lines.slice(i == 1 ? 0 : i, i * 10).join('.')}</p>
            ];
        }

    } else {
        Des = <p>{description}</p>

    }
    return (
        <div className='mt-10'>
            {
                img.length ? img.length > 2 ? <ImgSlider data={img}></ImgSlider> : img.length === 2 ? <Grid container spacing={2}>

                    {
                        img.map(single => <Grid key={single.url} item md={6} xs={12}>
                            <Image src={single.url} height={618} width={1060} alt='d'></Image>
                            <em>{single.title}</em>
                        </Grid>)
                    }

                </Grid> : <>
                    {img.map(single => <>
                        <Image key={single.url} src={single.url} height={618} width={1060} alt='d'></Image>
                        <em>{single.title}</em></>)}
                </> : video ? <video preload="metadata" controls src={video + '#t=2'}></video> : ''
            }

            <div className='mt-5 text-gray-300'>
                <h1 className='text-2xl mb-2 '>{title}</h1>

                {
                    Des
                }
            </div>
        </div>
    );
};

export default BlogSection;