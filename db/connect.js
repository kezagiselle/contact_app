import mongoose from  'mongoose'
const connectDB = (url) => {
    return mongoose
    .connect(url)
    .then(() => console.log('connected to the DB...'))
    .catch((err) => console.log(err))
}

export default connectDB