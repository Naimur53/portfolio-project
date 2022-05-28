import { Avatar } from '@mui/material';
import { data } from 'autoprefixer';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';
import CommentIcon from '@mui/icons-material/Comment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

const MainSection = () => {
    const { blogDetails } = useSelector(allData)
    return (
        <>
            <div className='flex justify-between items-center'>
                <div className='pb-5 flex mt-5'>
                    <div className='mr-4'>
                        <Avatar src='https://i.ibb.co/5LwPHgJ/20190320-WEST-AFRICA-FROM-GUNJUR-TO-BASSE-2964-removebg-preview.png' alt="blog " sx={{
                            width: 40, height: 40
                        }}></Avatar>
                    </div>
                    <div>
                        <h1 className='text-md text-gray-300 '>AUTHOR: MR JOHN</h1>
                        <h3 className='text-sm font-light text-gray-300'>{new Date(blogDetails.date).toDateString()}</h3>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="text-gray-300 flex hover:text-white transition-colors cursor-pointer mr-4">

                        <ShareIcon></ShareIcon>
                        <span className="ml-2 font-bold">Share</span>
                    </div>
                    <div className="text-gray-300 hover:text-white transition-colors cursor-pointer flex mr-4">

                        <FavoriteBorderIcon></FavoriteBorderIcon>
                        <span className="ml-2 font-bold">{blogDetails.love}</span>
                    </div>
                    <div className="text-gray-300 flex hover:text-white transition-colors cursor-pointer ">

                        <CommentIcon></CommentIcon>
                        <span className="ml-2 font-bold">{blogDetails.comments.length}</span>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-gray-300'>{blogDetails.description}</p>
            </div>
        </>
    );
};

export default MainSection;