import express from 'express'
const router = express.Router();
import contactController from '../controllers/contact.js';


    router.route('/createContacts').post(contactController.createContacts)
    router.route('/findAllContacts').get(contactController.findAllContacts).post(contactController.createContacts)
    router.route('/findById/:id').get(contactController.findById).put(contactController.updateContacts).delete(contactController.deleteContacts)
    router.route('/findByEmail/:email').get(contactController.findByEmail)
    router.route('/findByPhone/:phone').get(contactController.findByPhone)
export default router

