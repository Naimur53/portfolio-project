import BlogSection from "../BlogSection/BlogSection";
import MainSection from "../MainSection/MainSection";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShareIcon from '@mui/icons-material/Share';
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import Comments from "../Comment/Comments";
import { useSelector } from "react-redux";
import { allData } from "../../dataSlice/dataSlice";
import CommentFrom from "../CommentFrom/CommentFrom";
import ShareLove from "../ShareLove/ShareLove";
const BlogRight = () => {
    const { blogDetails } = useSelector(allData);
    return (
        <div>
            <MainSection ></MainSection>
            {
                blogDetails.sections?.map(data => <BlogSection key={data.title} data={data}></BlogSection>)
            }
            <div className="my-10 flex justify-between items-center">
                <div>
                    <LocalOfferIcon sx={{ color: 'yellow' }} className="mr-1"></LocalOfferIcon>
                    <span>TAGS:</span>
                    {blogDetails.tags?.map((tag, i) => <span key={i} className="ml-2 mb-2 inline-block p-2 rounded-lg bg-gray-900">#{tag}</span>)}

                </div>
                <ShareLove></ShareLove>
            </div>
            <hr className="border-gray-700" />
            <div>
                <h2 className="mb-10 mt-4 text-3xl font-light text-gray-400">{blogDetails.comments?.length} <span className="ml-2">COMMENTS:</span></h2>
                {
                    blogDetails.comments?.map((comment, i) => <Comments key={i} data={comment}></Comments>)
                }
            </div>
            <>
                <CommentFrom></CommentFrom>
            </>
        </div>
    );
};

export default BlogRight;