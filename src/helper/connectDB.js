const mongoose = require('mongoose')

const connectDB = async () => {
    const uri = "mongodb+srv://learning-database:n4Jecc0URZJL35YK@cluster0.icikx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    mongoose.connect(uri, () => {
        console.log('connect')
    }, e => console.log(e))


}
export default connectDB;