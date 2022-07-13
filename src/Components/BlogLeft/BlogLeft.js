import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import SingleRecent from '../SingleRecent/SingleRecent';
import Comments from '../Comment/Comments'
import { Grid } from '@mui/material';
import Image from 'next/image';
import axios from 'axios';
import RecentLoadingCompo from '../AllLoading/RecentLoadingCompo';

const BlogLeft = () => {
    const [recents, setRecents] = useState([]);
    const [mostLoves, setMostLoves] = useState([]);
    const [comments, setCommnets] = useState([]);
    const [RecentLoading, setRecentLoading] = useState(true);
    const [mostLovesLoading, setMostLovesLoading] = useState(true);
    const [commentsLoading, setCommentsLoading] = useState(true);
    const [streams, setStreams] = useState([]);
    useEffect(() => {
        axios.get('https://stark-atoll-95180.herokuapp.com/blog/mostLoved')
            .then(res => {
                setMostLoves(res.data);
                setMostLovesLoading(false);
            })
        axios.get('https://stark-atoll-95180.herokuapp.com/blog/comment/recent')
            .then(res => {
                setCommnets(res.data);
                setCommentsLoading(false);
            })
        axios.get('https://stark-atoll-95180.herokuapp.com/blog/recent')
            .then(res => {
                setRecents(res.data);
                setRecentLoading(false);
            })
        axios.get('https://stark-atoll-95180.herokuapp.com/photostream')
            .then(res => {
                setStreams(res.data);
            })
    }, [])
    const Heading = ({ title, noM }) => {
        return <div>
            <h2 className={`font-family-mono font-normal uppercase text-gray-400 text-xl ${noM ? "mt-0" : 'mt-10'}`}>{title}</h2>
            <hr
                style={{ backgroundSize: '40px' }}
                className={`w-10 inline-block border-0 h-2 bg-center bg-[url('https://i.ibb.co/86hy94w/hr-light.png')]`}
            />
        </div>
    }
    return (
        <div className='pr-4'>
            <Heading noM title='Recent post'></Heading>
            {
                RecentLoading ?
                    [...Array(5).keys()].map(num => <RecentLoadingCompo key={num}></RecentLoadingCompo>)

                    : recents.map((singleData, i) => <SingleRecent index={i} key={i} data={singleData}></SingleRecent>)
            }
            <Heading title='Most loved posts'></Heading>
            {
                mostLovesLoading ? [...Array(5).keys()].map(num => <RecentLoadingCompo key={num}></RecentLoadingCompo>) : mostLoves.map((singleData, i) => <SingleRecent key={i} index={i} data={singleData}></SingleRecent>)
            }
            <div>
                <Heading title='Recent comment'></Heading>
                <div className='mt-5'>

                    {
                        commentsLoading ? [...Array(5).keys()].map(num => <RecentLoadingCompo key={num}></RecentLoadingCompo>) : comments.reverse().map((singleData, i) => <Comments small key={i} data={singleData.comments}></Comments>)
                    }
                </div>
            </div>
            <div>
                <Heading title='PHOTO STREAM'></Heading>
                <div className="mt-4">
                    <Grid container spacing={1} >
                        {
                            streams?.photos?.slice(0, 12)?.map(photo => <Grid item xs={3} key={photo}><Image src={photo} alt="photo stream" height={85} width={85} ></Image></Grid>)
                        }

                    </Grid>

                </div>
            </div>

        </div>
    );
};

export default BlogLeft;