import { useSelector } from 'react-redux';
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
import { allData } from '../../dataSlice/dataSlice';
import { motion } from "framer-motion";
const HomeCategory = () => {
    const { homeCategory } = useSelector(allData)
    return (
        <>
            {
                homeCategory?.map(single => <CategoryCard key={single._id} {...single}></CategoryCard>)
            }
        </>
    );
};


export default HomeCategory;