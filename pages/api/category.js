import connectDB from "../../src/helper/connectDB";
import nc from "next-connect";
import User from '../../src/models/user'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
connectDB();
const handler = nc({})
  .get(async (req, res) => {
    //  const user = await usersCollection.findOne({}) 
    // const result = await User.deleteMany({})
    // res.json(result);

  })
  .post((req, res) => {
    const data = req.body;
    console.log(data, 'data');

    res.json({ hello: "world" });
  })
  .put(async (req, res) => {
    res.end("async/await is also supported!");
  })
  .patch(async (req, res) => {
    throw new Error("Throws me around! Error can be caught and handled.");
  });
export default handler;
