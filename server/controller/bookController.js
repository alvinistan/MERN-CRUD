import Book from '../models/Book.js';
import mongoose from 'mongoose';

const addBook = async (req, res) => {
    try {
        const body = req.body;

        if(!body.bookName || !body.bookTitle || !body.author || !body.sellingPrice || !body.publishDate){
            return res.status(400).json({message: "All fields are required", success: false});
        }

        const bookAdd = await Book.insertOne(body);
        console.log(bookAdd);
        if(bookAdd){
            return res.status(201).json({message: "Book added successfully", success: true, Id: bookAdd?._id});
        }else{
            return res.status(400).json({message: "Failed to add book", success: false});
        }
    } catch (error) {
        res.status(500).json({message: error.message, success: false});
    }
}

const listBooks = async (req, res) => {
    try {
        const bookList = await Book.find({});
        return res.status(200).json({message: "Books fetched successfully", success: true, totalCount: bookList.length,data: bookList})
    } catch (error) {
        return res.status(500).json({message: error.message, success: false})
    }
}

const deleteBook = async (req, res) => {
    const {id} = req.body
    try {
        
        const deletedBook = await Book.deleteOne({_id: id});
        console.log("Deleted:", deletedBook)

        if(deletedBook.acknowledged){
            return res.json({message: "Book deleted Successfully", success: true});
        }
    } catch (error) {
        return res.status(400).json({message: error.message, success: false})
    }
}

const updateBook = async (req, res) => {
  try {
    const { id, ...updateData } = req.body;
    console.log("Updating ID:", id);
    console.log("Update Data:", updateData);

    const updatingBook = await Book.updateOne(
      { _id: id },
      { $set: updateData }
    );

    if (!id) {
      return res.status(400).json({ success: false, message: "Book id is required" });
    }
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ success: false, message: "Invalid book id" });
    }

    console.log("Updating:", updatingBook);

    if (updatingBook.acknowledged) {
      return res.json({
        message: "Book updated successfully",
        success: true,
      });
    } else {
      return res.json({
        message: "Book update failed",
        success: false,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};


export {addBook , listBooks ,deleteBook, updateBook};

