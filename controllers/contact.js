import Contact  from '../models/contact.js'
//const {createCustomError} = require()

const createContacts = async(req,res) => {
    try {
        const contact = await Contact.create(req.body)
        res.status(201).json(req.body)
    } catch (error){
        res.status(500).json({msg: error})
    }
}

const updateContacts = async(req,res) => {
    try {
        const id = req.params.id
        const contact = await Contact.findByIdAndUpdate(id,req.body,{
            new: true,
            runValidators: true
        })
        if(!contact){
            return next(createCustomError(`No contact with id: ${contact}`, 404 ))
        }
        res.status(200).json({contact})
    } catch (error){
        res.status(500).json({msg: error})
    }
}

const deleteContacts = async(req,res) => {
    try {
        const id= req.params.id
        const contact = await Contact.findByIdAndDelete({id
    })
        if(!contact){
            return next(createCustomError(`No contact with id: ${contact}`, 404 ))
        }
        res.status(200).json({contact})
    } catch (error){
        res.status(500).json({msg: error})
    }
}

const findAllContacts = async(req,res) => {
    try {
        const contact = await Contact.find({})
        res.status(200).json({contact})
    } catch (error){
        res.status(500).json({msg: error})
    }
}

const findById = async(req,res) => {
    try {
        const {id: contactID} = req.params
        const contact = await Contact.findOne({_id:contactID});
        res.status(200).json({contact})
    } catch (error){
        res.status(500).json({msg: error})
    }
}

const findByEmail = async(req,res) => {
    try {
        const email= req.query.email
        const query={}
        if(email){
            query.email=email
        }
        const contact = await Contact.find(query);
        res.status(200).json({contact})
    } catch (error){
        res.status(500).json({msg: error})
    }
}

const findByPhone = async(req,res) => {
    try {
        const phone = req.query.phone
        const query = {}
        if(phone){
            query.phone = phone
        }
        const contact = await Contact.findOne(query);
        res.status(200).json({contact})
    } catch (error){
        res.status(500).json({msg: error})
    }
}
const contactController={
    createContacts,
    findAllContacts,
    findByEmail,
    findById,
    findByPhone,
    deleteContacts,
    updateContacts
}
export default contactController