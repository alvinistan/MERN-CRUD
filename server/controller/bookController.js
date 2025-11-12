import Book from '../models/Book.js';

const addBook = async (req, res) => {
    try {
        const body = req.body;

        if(!body.bookName || !body.bookTitle || !body.author || !body.sellingPrice || !body.publishDate){
            return res.status(400).json({message: "All fields are required", success: false});
        }

        const bookAdd = await Book.insertOne(body);
        console.log(bookAdd);
        if(bookAdd){
            return res.status(201).json({message: "Book added successfully", success: true});
        }else{
            return res.status(400).json({message: "Failed to add book", success: false});
        }
    } catch (error) {
        res.status(500).json({message: error.message, success: false});
    }
}

export default addBook;

