import BlogSection from "../BlogSection/BlogSection";
import MainSection from "../MainSection/MainSection";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShareIcon from '@mui/icons-material/Share';
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import Comments from "../Comment/Comments";
const BlogRight = () => {
    const data = {
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
        }]
        ,
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
    return (
        <div>
            <MainSection data={data.mainSection}></MainSection>
            {
                data.sections?.map(data => <BlogSection key={data.title} data={data}></BlogSection>)
            }
            <div className="my-10 flex justify-between">
                <div>
                    <LocalOfferIcon sx={{ color: 'yellow' }} className="mr-1"></LocalOfferIcon>
                    <span>TAGS:</span>
                    {data.tags.map((tag, i) => <span key={i} className="ml-2 p-2 rounded-lg bg-gray-900">#{tag}</span>)}

                </div>
                <div className="flex justify-between">
                    <div className="text-gray-300 hover:text-white transition-colors cursor-pointer mr-4">

                        <ShareIcon></ShareIcon>
                        <span className="ml-2 font-bold">Share</span>
                    </div>
                    <div className="text-gray-300 hover:text-white transition-colors cursor-pointer mr-4">

                        <FavoriteBorderIcon></FavoriteBorderIcon>
                        <span className="ml-2 font-bold">{data.love}</span>
                    </div>
                    <div className="text-gray-300 hover:text-white transition-colors cursor-pointer ">

                        <CommentIcon></CommentIcon>
                        <span className="ml-2 font-bold">{data.comments.length}</span>
                    </div>
                </div>
            </div>
            <hr className="border-gray-700" />
            <div>
                <h2 className="mb-10 mt-4 text-3xl font-light text-gray-400">{data.comments.length} <span className="ml-2">COMMENTS:</span></h2>
                {
                    data.comments.map((comment, i) => <Comments key={i} data={comment}></Comments>)
                }
            </div>
        </div>
    );
};

export default BlogRight;