import HomeBanner from "../src/Components/HomeBanner/HomeBanner";
import HomeCategory from "../src/Components/HomeCategory/HomeCategory"
import { addHomeCategory } from '../src/dataSlice/dataSlice'
import { wrapper } from "../src/store/store";
import { motion } from "framer-motion";
import { Container } from "@mui/material";
export default function Home({ data }) {
  return (
    <Container>
      <motion.div exit={{ opacity: 0 }}>
        <HomeBanner></HomeBanner>
        <HomeCategory></HomeCategory>

      </motion.div>
    </Container>
  )
}
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:5000/category`)
//   const data = await res.json()
//   console.log('server', res);

//   // Pass data to the page via props
//   return { props: { data } }
// }
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const res = await fetch(`http://localhost:5000/category`)
    const data = await res.json();
    store.dispatch(addHomeCategory(data))
  })