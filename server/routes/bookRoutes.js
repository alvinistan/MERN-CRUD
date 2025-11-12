// Import express and your controller
import express from 'express';
import {addBook, listBooks} from '../controller/bookController.js';

// Create a new router instance
const router = express.Router();

// Route to add a book (POST request)
router.post('/add', addBook);
router.get('/list',listBooks)

// Export the router for use in other files
export default router;
