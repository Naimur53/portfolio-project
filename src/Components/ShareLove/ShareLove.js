import React from 'react';

import CommentIcon from '@mui/icons-material/Comment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';
import { Link } from '@mui/material';
const ShareLove = () => {
    const { blogDetails, user } = useSelector(allData);

    const handleShare = () => {
        navigator.share({
            url: location.href
        })
    }
    return (
        <div className="flex justify-between">
            <div onClick={handleShare} className="text-gray-300 flex hover:text-white transition-colors cursor-pointer mr-4">

                <ShareIcon></ShareIcon>
                <span className="ml-2 font-bold">Share</span>
            </div>
            <div className="text-gray-300 hover:text-white transition-colors cursor-pointer flex mr-4">
                {
                    !user.email ? <Link href='#commentlogin' className='text-white hover:no-underline	'>

                        <FavoriteBorderIcon></FavoriteBorderIcon>
                        <span className="ml-2 font-bold">{blogDetails.love}</span>
                    </Link> : <>

                        <FavoriteBorderIcon></FavoriteBorderIcon>
                        <span className="ml-2 font-bold">{blogDetails.love}</span>
                    </>
                }


            </div>
            <div className="text-gray-300 flex hover:text-white transition-colors cursor-pointer ">


                {
                    !user.email ? <Link href='#commentlogin' className='text-white hover:no-underline	'>
                        <CommentIcon></CommentIcon>
                        <span className="ml-2 font-bold">{blogDetails.comments.length}</span>
                    </Link> : <>

                        <CommentIcon></CommentIcon>
                        <span className="ml-2 font-bold">{blogDetails.comments.length}</span>
                    </>
                }

            </div>
        </div>
    );
};

export default ShareLove;