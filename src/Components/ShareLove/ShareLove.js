import React from 'react';

import CommentIcon from '@mui/icons-material/Comment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { useSelector, useDispatch } from 'react-redux';
import { addLove, allData } from '../../dataSlice/dataSlice';
import { Link } from '@mui/material';
import axios from 'axios';
import FavoriteIcon from '@mui/icons-material/Favorite';
const ShareLove = () => {
    const { blogDetails, user } = useSelector(allData);
    const dispatch = useDispatch()
    const handleShare = () => {
        navigator.share({
            url: location.href
        })
    }
    const handleLove = () => {
        if (user.email) {
            dispatch(addLove(user))
            axios.put(`http://localhost:5000/blog/love?id=${blogDetails._id}`, user)
                .then(res => {
                    console.log(res);
                })
        }
    }
    console.log(blogDetails.love)
    return (
        <div className="flex justify-between">
            <div onClick={handleShare} className="text-gray-300 flex hover:text-white transition-colors cursor-pointer mr-4">

                <ShareIcon></ShareIcon>
                <span className="ml-2 font-bold">Share</span>
            </div>
            <div className="text-gray-300 hover:text-white transition-colors cursor-pointer flex mr-4">
                {
                    !user.email ? <Link href='#commentlogin' className='text-white hover:no-underline flex'>

                        <FavoriteBorderIcon></FavoriteBorderIcon>
                        <span className="ml-2 font-bold">{blogDetails?.love?.length}</span>
                    </Link> : <>
                        {

                            blogDetails.love?.filter(single => single.email === user.email).length ? <div className='flex'>
                                <FavoriteIcon sx={{ color: "yellow " }}></FavoriteIcon>
                                <span className="ml-2 font-bold">{blogDetails?.love?.length}</span>

                            </div> : <div className='flex' onClick={handleLove}>
                                <FavoriteBorderIcon></FavoriteBorderIcon>
                                <span className="ml-2 font-bold">{blogDetails?.love?.length}</span>

                            </div>
                        }


                    </>
                }


            </div>
            <div className="text-gray-300 flex hover:text-white transition-colors cursor-pointer ">

                <Link href='#commentlogin' className=' text-gray-300 transition-colors  hover:text-white flex hover:no-underline	'>
                    <CommentIcon></CommentIcon>
                    <span className="ml-2 font-bold">{blogDetails?.comments?.length}</span>
                </Link>

            </div>
        </div>
    );
};

export default ShareLove;