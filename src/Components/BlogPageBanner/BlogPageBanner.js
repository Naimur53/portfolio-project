import React from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';

const BlogPageBanner = (props) => {
    const { blogDetails } = useSelector(allData)
    return (
        <div
            style={
                {
                    background: `linear-gradient(to bottom,  rgba(0,0,0,0.6) 0%,rgba(19,19,19,1) 100%),url(${props.default ? "https://demo.themetorium.net/html/agatha/dark/assets/img/headings/heading-10.jpg" : blogDetails.img})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '60vh',
                }
            }
        >
            {
                props.default ? <div >
                    <h1 className='t  text-3xl font-family-mono font-thin'>Writing my blog has saved me thousands on therapy</h1>
                    <div className="flex  justify-center mt-3">
                        <div className='w-52 flex justify-between  font-family-mono font-thin'>
                            <span>Home</span>
                            <span>/</span>
                            <span>Blogs</span>
                        </div>

                    </div>

                </div> : <div >
                    <h1 className='text-3xl font-family-mono font-thin'>{blogDetails.heading}</h1>
                    <div className="flex  justify-center mt-3">
                        <div className='w-96  flex justify-between font-family-mono font-thin'>
                            <span>Home</span>
                            <span>/</span>
                            <span>Blogs</span>
                            <span>/</span>
                            <span>{blogDetails.heading?.slice(0, 20)}...</span>
                        </div>

                    </div>

                </div>
            }



        </div>
    );
};

export default BlogPageBanner;