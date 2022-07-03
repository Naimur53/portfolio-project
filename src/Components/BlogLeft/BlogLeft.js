import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import SingleRecent from '../SingleRecent/SingleRecent';
import Comments from '../Comment/Comments'
import { Grid } from '@mui/material';
import Image from 'next/image';
import axios from 'axios';
import RecentLoadingCompo from '../AllLoading/RecentLoadingCompo';

const BlogLeft = () => {
    const data = [
        {
            mainSection: {
                img: "https://i.ibb.co/PMdzcvn/img-1.jpg",
                heading: "ONE DAY FASHION SHOOT",
                description: 'Curabitur eu congue erat. Donec posuere eu est eget egestas. Pellentesque porttitor blandit massa, nec luctus ligula facilisis sodales. Nam eu felis a ex efficitur faucibus in mollis arcu. Sed venenatis urna in lorem consequat rutrum. Nullam imperdiet arcu nec erat maximus faucibus...',
                location: 'Klik hier voor Nederlands',
                date: new Date().toDateString(),
            },
            sections: [{
                title: "The disappointment comes at home. ",
                img: [{ title: 'Ait Ben Haddou  Morocco: A first attempt under poor light conditions', url: 'https://i.ibb.co/hVm9s2y/20161021-AIT-BEN-HABBOU-351-Pano-1200x406.jpg' }],
                video: "",
                description: "I have a few golden rules. One of these rules, ‘Don’t try to organize, be on time and stay until you are completely satisfied.’ So I was on time. Sunset was expected around 7:30 and I was there at five. Camera tripod set up and the Nikon D5 on it. New pack of Marlboro in my pocket for the usual ‘Time killing smoking’. Slowly, bit by bit I see the light change. At that moment the light plan starts in my head. I take in some reference points. When the sun goes down there …. that is my moment. I do some spot measurements and light up another Marlboro. Just wait, this is going to be all right."
            }],
            tags: ['PHOTOGRAPHY', "FASHION", 'BLACK & WHITE'],
            love: 30,
            comments: [{
                id: 'id', user: {
                    displayName: 'JONE DOE',
                    photoUrl: 'https://demo.themetorium.net/html/agatha/dark/assets/img/blog/small/avatar/avatar-1.jpg',
                },
                date: new Date().toDateString(),
                comment: 'Quis ante id eros orci eget. Ac egestas praesent aliquam nisl in vitae aliquam vitae. Vivamus sed elementum. Sem sed sed. Hendrerit elit eget sem pellentesque a. Velit elit lacinia mattis amet nunc. Fames ipsum rhoncus. Natoque posuere nam commodo mattis orci. Aliquet praesent tempor ac dolor aliquet.'
            },
            {
                id: 'id', user: {
                    displayName: 'JONE DOE',
                    photoUrl: 'https://demo.themetorium.net/html/agatha/dark/assets/img/blog/small/avatar/avatar-1.jpg',
                },
                date: new Date().toDateString(),
                comment: 'Quis ante id eros orci eget. Ac egestas praesent aliquam nisl in vitae aliquam vitae. Vivamus sed elementum. Sem sed sed. Hendrerit elit eget sem pellentesque a. Velit elit lacinia mattis amet nunc. Fames ipsum rhoncus. Natoque posuere nam commodo mattis orci. Aliquet praesent tempor ac dolor aliquet.'
            }
            ]

        },
        {
            mainSection: {
                img: "https://i.ibb.co/PMdzcvn/img-1.jpg",
                heading: "ONE DAY FASHION SHOOT",
                description: 'Curabitur eu congue erat. Donec posuere eu est eget egestas. Pellentesque porttitor blandit massa, nec luctus ligula facilisis sodales. Nam eu felis a ex efficitur faucibus in mollis arcu. Sed venenatis urna in lorem consequat rutrum. Nullam imperdiet arcu nec erat maximus faucibus...',
                location: 'Klik hier voor Nederlands',
                date: new Date().toDateString(),
            },
            sections: [{
                title: "The disappointment comes at home. ",
                img: [{ title: 'Ait Ben Haddou  Morocco: A first attempt under poor light conditions', url: 'https://i.ibb.co/hVm9s2y/20161021-AIT-BEN-HABBOU-351-Pano-1200x406.jpg' }],
                video: "",
                description: "I have a few golden rules. One of these rules, ‘Don’t try to organize, be on time and stay until you are completely satisfied.’ So I was on time. Sunset was expected around 7:30 and I was there at five. Camera tripod set up and the Nikon D5 on it. New pack of Marlboro in my pocket for the usual ‘Time killing smoking’. Slowly, bit by bit I see the light change. At that moment the light plan starts in my head. I take in some reference points. When the sun goes down there …. that is my moment. I do some spot measurements and light up another Marlboro. Just wait, this is going to be all right."
            }],
            tags: ['PHOTOGRAPHY', "FASHION", 'BLACK & WHITE'],
            love: 30,
            comments: [{
                id: 'id', user: {
                    displayName: 'JONE DOE',
                    photoUrl: 'https://demo.themetorium.net/html/agatha/dark/assets/img/blog/small/avatar/avatar-1.jpg',
                },
                date: new Date().toDateString(),
                comment: 'Quis ante id eros orci eget. Ac egestas praesent aliquam nisl in vitae aliquam vitae. Vivamus sed elementum. Sem sed sed. Hendrerit elit eget sem pellentesque a. Velit elit lacinia mattis amet nunc. Fames ipsum rhoncus. Natoque posuere nam commodo mattis orci. Aliquet praesent tempor ac dolor aliquet.'
            }]

        }
    ]
    const photos = [
        {
            _id: "62817590f683697073c38859",
            url: 'https://i.ibb.co/W2MHbNw/West-africa008.jpg',
            name: 'West-africa008',
            love: 0
        },
        {
            _id: "62817590f683697073c3885a",
            url: 'https://i.ibb.co/DbPW9BL/West-africa009.jpg',
            name: 'West-africa009',
            love: 0
        },
        {
            _id: "62817590f683697073c3885b",
            url: 'https://i.ibb.co/Pw8vRVL/West-africa010.jpg',
            name: 'West-africa010',
            love: 0
        },
        {
            _id: "62817590f683697073c3885c",
            url: 'https://i.ibb.co/f4sR0Rs/West-africa011.jpg',
            name: 'West-africa011',
            love: 0
        },
        {
            _id: "62817590f683697073c3885d",
            url: 'https://i.ibb.co/WD5VHmx/West-africa012.jpg',
            name: 'West-africa012',
            love: 0
        },
        {
            _id: "62817590f683697073c3885e",
            url: 'https://i.ibb.co/zP5twt5/West-africa013.jpg',
            name: 'West-africa013',
            love: 0
        },
        {
            _id: "62817590f683697073c3885f",
            url: 'https://i.ibb.co/9Y3tydH/West-africa014.jpg',
            name: 'West-africa014',
            love: 0
        },
        {
            _id: "62817590f683697073c38860",
            url: 'https://i.ibb.co/5k1bqkV/West-africa015.jpg',
            name: 'West-africa015',
            love: 0
        },
        {
            _id: "62817590f683697073c3885f",
            url: 'https://i.ibb.co/9Y3tydH/West-africa014.jpg',
            name: 'West-africa014',
            love: 0
        },
        {
            _id: "62817590f683697073c38860",
            url: 'https://i.ibb.co/5k1bqkV/West-africa015.jpg',
            name: 'West-africa015',
            love: 0
        },
        {
            _id: "62817590f683697073c3885f",
            url: 'https://i.ibb.co/9Y3tydH/West-africa014.jpg',
            name: 'West-africa014',
            love: 0
        },
        {
            _id: "62817590f683697073c38860",
            url: 'https://i.ibb.co/5k1bqkV/West-africa015.jpg',
            name: 'West-africa015',
            love: 0
        },
        {
            _id: "62817590f683697073c38861",
            url: 'https://i.ibb.co/1LjJtHr/West-africa016.jpg',
            name: 'West-africa016',
            love: 0
        },
        {
            _id: "62817590f683697073c38861",
            url: 'https://i.ibb.co/1LjJtHr/West-africa016.jpg',
            name: 'West-africa016',
            love: 0
        },
        {
            _id: "62817590f683697073c38861",
            url: 'https://i.ibb.co/1LjJtHr/West-africa016.jpg',
            name: 'West-africa016',
            love: 0
        },
    ]
    const [recents, setRecents] = useState([]);
    const [mostLoves, setMostLoves] = useState([]);
    const [comments, setCommnets] = useState([]);
    const [RecentLoading, setRecentLoading] = useState(true);
    const [mostLovesLoading, setMostLovesLoading] = useState(true);
    const [commentsLoading, setCommentsLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:5000/blog/recent')
            .then(res => {
                setRecents(res.data);
                setRecentLoading(false);
            })
    }, [])
    useEffect(() => {
        axios.get('http://localhost:5000/blog/mostLoved')
            .then(res => {
                setMostLoves(res.data);
                setMostLovesLoading(false);
            })
    }, [])
    useEffect(() => {
        axios.get('http://localhost:5000/blog/comment/recent')
            .then(res => {
                setCommnets(res.data);
                setCommentsLoading(false);
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
                    <Grid container spacingY={1} >
                        {
                            photos.slice(0, 12).map(photo => <Grid item xs={3} key={photo._id}><Image src={photo.url} alt="gallary" height={85} width={85} ></Image></Grid>)
                        }
                        <Grid item xs={3}>

                        </Grid>

                    </Grid>

                </div>
            </div>

        </div>
    );
};

export default BlogLeft;