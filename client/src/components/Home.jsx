import React, { useEffect, useState } from "react";
import { bookBaseUrl } from "../AxiosInstance.js";
import { toast } from "react-toastify";
import { IoMdTrash } from "react-icons/io";
import { MdOutlineEditNote } from "react-icons/md";

const Home = () => {
  const [bookForm, setBookForm] = useState({
    bookName: "",
    bookTitle: "",
    author: "",
    sellingPrice: "",
    publishDate: "",
  });

  const [bookList, setBookList] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const resetForm = () => {
    setBookForm({
      bookName: "",
      bookTitle: "",
      author: "",
      sellingPrice: "",
      publishDate: "",
    });
    setIsUpdating(false);
    setEditingId(null);
  };

  const getAllBooksList = async () => {
    try {
      const { data } = await bookBaseUrl.get("/list");
      setBookList(data?.data || []);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAllBooksList();
  }, []);

  const handleSubmit = async () => {
    try {
      const { bookName, bookTitle, author, sellingPrice, publishDate } = bookForm;

      if (!bookName || !bookTitle || !author || !sellingPrice || !publishDate) {
        toast.error("All fields are required");
        return;
      }

      const payload = {
        ...bookForm,
        sellingPrice: Number(sellingPrice),
      };

      let res;
      if (isUpdating && editingId) {
        // UPDATE
        res = await bookBaseUrl.put("/update", { id: editingId, ...payload });
      } else {
        // ADD
        res = await bookBaseUrl.post("/add", payload);
      }

      const { data } = res || {};
      if (data?.success) {
        toast.success(data?.message || (isUpdating ? "Book updated successfully" : "Book added successfully"));
        await getAllBooksList();
        resetForm();
      } else {
        toast.error(data?.message || "Operation failed");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await bookBaseUrl.post("/delete", { id });
      if (data?.success) {
        toast.success(data?.message);
        await getAllBooksList();
        // If you deleted the item being edited, exit edit mode
        if (editingId === id) resetForm();
      } else {
        toast.error(data?.message || "Delete failed");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleUpdate = (book) => {
    // Prefill the form and switch to update mode
    setBookForm({
      bookName: book.bookName || "",
      bookTitle: book.bookTitle || "",
      author: book.author || "",
      sellingPrice: String(book.sellingPrice ?? ""),
      // Ensure the date input gets yyyy-mm-dd
      publishDate: book.publishDate ? new Date(book.publishDate).toISOString().slice(0, 10) : "",
    });
    setEditingId(book._id);
    setIsUpdating(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full px-5 min-h-[calc(100vh-60px)]">
      <div className="w-full grid grid-cols-5 gap-3 py-4">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="bookName">Book Name</label>
          <input
            id="bookName"
            type="text"
            placeholder="Book Name"
            className="w-full border border-gray-400 rounded-sm outline-2 outline-green-300 h-8 px-2 text-gray-800 hover:outline-green-600"
            name="bookName"
            value={bookForm.bookName}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="bookTitle">Book Title</label>
          <input
            id="bookTitle"
            type="text"
            placeholder="Book Title"
            className="w-full border border-gray-400 rounded-sm outline-2 outline-green-300 h-8 px-2 text-gray-800 hover:outline-green-600"
            name="bookTitle"
            value={bookForm.bookTitle}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            placeholder="Author"
            className="w-full border border-gray-400 rounded-sm outline-2 outline-green-300 h-8 px-2 text-gray-800 hover:outline-green-600"
            name="author"
            value={bookForm.author}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="sellingPrice">Selling Price</label>
          <input
            id="sellingPrice"
            type="number"
            placeholder="Selling Price"
            className="w-full border border-gray-400 rounded-sm outline-2 outline-green-300 h-8 px-2 text-gray-800 hover:outline-green-600"
            name="sellingPrice"
            value={bookForm.sellingPrice}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="publishDate">Publish Date</label>
          <input
            id="publishDate"
            type="date"
            placeholder="Publish Date"
            className="w-full border border-gray-400 rounded-sm outline-2 outline-green-300 h-8 px-2 text-gray-800 hover:outline-green-600"
            name="publishDate"
            value={bookForm.publishDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="w-full flex items-center justify-end gap-3">
        {isUpdating && (
          <button
            onClick={resetForm}
            className="bg-gray-300 h-10 px-4 rounded-md cursor-pointer hover:bg-gray-400 text-gray-800"
            type="button"
          >
            Cancel
          </button>
        )}
        <button
          onClick={handleSubmit}
          className={`h-10 w-28 rounded-md cursor-pointer text-white ${
            isUpdating ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isUpdating ? "Update" : "Submit"}
        </button>
      </div>

      <div className="w-full mt-10">
        <div className="w-full border border-green-400">
          <div className="max-h-96 overflow-y-auto">
            <table className="w-full table-fixed border-collapse">
              <thead className="sticky top-0 bg-green-400 z-10 text-left">
                <tr>
                  <th className="border border-green-300 px-4 py-2 w-1/5">Book Name</th>
                  <th className="border border-green-300 px-4 py-2 w-1/5">Book Title</th>
                  <th className="border border-green-300 px-4 py-2 w-1/5">Author</th>
                  <th className="border border-green-300 px-4 py-2 w-1/5">Selling Price</th>
                  <th className="border border-green-300 px-4 py-2 w-1/5">Publish Date</th>
                  <th className="border border-green-300 px-4 py-2 w-1/5">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookList.length > 0 ? (
                  bookList.map((book, index) => (
                    <tr
                      key={book._id || index}
                      className={`${index % 2 === 0 ? "bg-green-100" : "bg-white"} hover:bg-yellow-100 cursor-pointer text-left`}
                    >
                      <td className="border border-green-300 px-4 py-2">{book.bookName}</td>
                      <td className="border border-green-300 px-4 py-2">{book.bookTitle}</td>
                      <td className="border border-green-300 px-4 py-2">{book.author}</td>
                      <td className="border border-green-300 px-4 py-2">{book.sellingPrice}</td>
                      <td className="border border-green-300 px-4 py-2">
                        {book.publishDate ? new Date(book.publishDate).toLocaleDateString() : ""}
                      </td>
                      <td className="px-4 py-2 border border-green-300 text-center">
                        <div className="w-20 items-center flex justify-center gap-5">
                          <button
                            className="flex items-center cursor-pointer hover:text-green-600"
                            onClick={() => handleDelete(book._id)}
                            aria-label="Delete"
                          >
                            <IoMdTrash className="h-6 w-6" />
                          </button>
                          <button
                            className="flex items-center cursor-pointer hover:text-green-600"
                            onClick={() => handleUpdate(book)}
                            aria-label="Edit"
                          >
                            <MdOutlineEditNote className="h-6 w-6" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center text-gray-500 py-10 font-semibold text-lg bg-gray-50">
                      📚 No Books Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
