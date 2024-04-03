import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required:[true,'firstName is required']   
    },
    LastName: {
        type: String,
        required:[true,'lastName is required']   
    },
    email: {
        type: String,
        required:[true,'email is required']   
    },
    phone: {
        type: String,
        required:[true,'phone number is required'],   
        unique:[true, 'phone number must be unique']
    },
    address: {
        type: String,
        required: false
    },
    company: {
        type: String,
        required: false 
    },
    profilePicture: {
        type: String,
        required:false   
    }, 
},{timeStamps: true});

const contactModel = mongoose.model('contact',contactSchema)
export default contactModel;