//require('dotenv').config()
import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swagger from './docs/swagger.json' assert {type:"json"}
const app = express();
import connectDB from './db/connect.js';
import contacts from './routes/contact.js' 
import notfound from './middleware/not-found.js'


//middleware
app.use(express.json())
app.use('/contacts', contacts)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger));
app.use(notfound)


const port = process.env.PORT || 4000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI || 'mongodb+srv://gisele:Gisele123@cluster0.oda5ikc.mongodb.net/')
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()