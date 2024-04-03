import express from 'express'
const router = express.Router();
import contactController from '../controllers/contact.js';


    router.route('/').get(contactController.findAllContacts).post(contactController.createContacts)
    router.route('/:id').get(contactController.findById).patch(contactController.updateContacts)
    router.route('/:email').get(contactController.findByEmail).delete(contactController.deleteContacts)
    router.route('/:phone').get(contactController.findByPhone)
export default router

