import contact  from '../models/contact.js'
//const {createCustomError} = require()

const createContacts = async(req,re) => {
    try {
        const contact = await contact.create(req.body)
        res.status(201).json(req.body)
    } catch (error){
        res.status(500).json({msg: error})
    }
}

const updateContacts = async(req,re) => {
    try {
        const {id: contactID} = req.params
        const contact = await contact.findByIdAndUpdate({_id: contactID},req.body,{
            new: true,
            runValidators: true
        })
        if(!contact){
            return next(createCustomError(`No contact with id: ${contactID}`, 404 ))
        }
        res.status(200).json({id:contactID,data: req,body})
    } catch (error){
        res.status(500).json({msg: error})
    }
}

const deleteContacts = async(req,re) => {
    try {
        const {id: contactID} = req.params
        const contact = await contact.findByIdAndDelete({_id: contactID},req.body,{
            new: true,
            runValidators: true
        })
        if(!contact){
            return next(createCustomError(`No contact with id: ${contactID}`, 404 ))
        }
        res.status(200).json({id:contactID,data: req,body})
    } catch (error){
        res.status(500).json({msg: error})
    }
}

const findAllContacts = async(req,re) => {
    try {
        const contact = await contact.find({})
        res.status(200).json({contacts})
    } catch (error){
        res.status(500).json({msg: error})
    }
}

const findById = async(req,re) => {
    try {
        const {id: contactID} = req.params
        const contact = await contact.findOne({_id:contactID});
        res.status(200).json({contacts})
    } catch (error){
        res.status(500).json({msg: error})
    }
}

const findByEmail = async(req,re) => {
    try {
        const {email: contactEmail} = req.params
        const contact = await contact.findOne({_email:contactEmail});
        res.status(200).json({contacts})
    } catch (error){
        res.status(500).json({msg: error})
    }
}

const findByPhone = async(req,re) => {
    try {
        const {phone: contactPhone} = req.params
        const contact = await contact.findOne({_phone:contactPhone});
        res.status(200).json({contacts})
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