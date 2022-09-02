import { Container, Grid } from '@mui/material';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from '../src/Components/Head/Head';
import BlogPageBanner from '../src/Components/BlogPageBanner/BlogPageBanner';
import BlogRight from '../src/Components/BlogRight/BlogRight';
import Footer from '../src/Components/AboutPages/Footer';
import { wrapper } from '../src/store/store';
import { addBlogDetails, allData } from '../src/dataSlice/dataSlice';
import { useSelector, useDispatch } from 'react-redux'
const Bio = () => {
    const { blogDetails } = useSelector(allData);
    const dispatch = useDispatch();
    const router = useRouter()
    useEffect(() => {
        if (!blogDetails?._id) {
            router.push('/404')
        }
    }, [blogDetails, router])
    if (!blogDetails?._id) {
        return <div>

        </div>
    }
    return (
        <div className='bg-cover' style={{ backgroundImage: 'url(https://i.ibb.co/n7xmh1M/NEW-Background.jpg)', minHeight: '100vh' }}>
            <Head title={blogDetails?.heading?.slice(0, 20)} keywords={blogDetails?.tags}></Head>
            <BlogPageBanner  ></BlogPageBanner>
            <div className='bg-chak'>

                <Container className='  overflow-hidden   py-10'>
                    {/* <Grid container className='md:flex-row flex-col-reverse w-full' spacing={2}>
                    <Grid xs={12} md={4}>
                        <BlogLeft></BlogLeft>
                    </Grid>
                    <Grid xs={12} md={8}>
                       
                    </Grid>

                </Grid> */}
                    <BlogRight bio={true}></BlogRight>
                    <Footer></Footer>
                </Container>
            </div>
        </div>
    );
};

export default Bio;
export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async ({ params }) => {
        const res = await fetch(`https://stark-atoll-95180.herokuapp.com/bio`)
        const data = await res.json();
        store.dispatch(addBlogDetails(data))
    }) 