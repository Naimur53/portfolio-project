import nc from "next-connect";
const handler = nc({})
    .get(async (req, res) => {
        // const user = await usersCollection.findOne({}) 

        res.send('hello world');

    })
export default handler;
