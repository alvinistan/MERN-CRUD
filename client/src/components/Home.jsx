import React from "react";
import { useState } from "react";
import { bookBaseUrl } from "../AxiosInstance.js";
import {toast} from 'react-toastify';

const Home = () => {
  const index = 2;
  const [bookForm, setBookForm] = useState({
    bookName: "",
    bookTitle: "",
    author: "",
    sellingPrice: "",
    publishDate: "",
  });

  //   console.log(bookForm);

  const handleSubmit = async () => {
    try {

    if(!bookForm.bookName || !bookForm.bookTitle || !bookForm.author || !bookForm.sellingPrice || !bookForm.publishDate){
      toast.error("All fields are required");
      return;
    }
    
      const {data} = await bookBaseUrl.post("/add", bookForm);
      if(data?.success){
        toast.success(data?.message);
      }
      setBookForm({
        bookName: "",
        bookTitle: "",
        author: "",
        sellingPrice: "",
        publishDate: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookForm({ ...bookForm, [name]: value });
  };
  return (
    <div className="width-full px-5 min-h-[calc(100vh-60px)]">
      <div className="w-full grid grid-cols-5 gap-3 py-4">
        <div className="w-full flex flex-col gap-2">
          <label for="">BooK Name</label>
          <input
            type="text"
            placeholder="BooK Name"
            className="w-full border border-gray-400 rounded-sm outline-2 outline-green-300 h-8 px-2 text-gray-800 hover:outline-green-600"
            name="bookName"
            value={bookForm.bookName}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label for="">BooK Title</label>
          <input
            type="text"
            placeholder="BooK Title"
            className="w-full border border-gray-400 rounded-sm outline-2 outline-green-300 h-8 px-2 text-gray-800 hover:outline-green-600"
            name="bookTitle"
            value={bookForm.bookTitle}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label for="">Author</label>
          <input
            type="text"
            placeholder="Author"
            className="w-full border border-gray-400 rounded-sm outline-2 outline-green-300 h-8 px-2 text-gray-800 hover:outline-green-600"
            name="author"
            value={bookForm.author}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label for="">Sellig Price</label>
          <input
            type="text"
            placeholder="Sellig Price"
            className="w-full border border-gray-400 rounded-sm outline-2 outline-green-300 h-8 px-2 text-gray-800 hover:outline-green-600"
            name="sellingPrice"
            value={bookForm.sellingPrice}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label for="">Publish Date</label>
          <input
            type="date"
            placeholder="Publish Date"
            className="w-full border border-gray-400 rounded-sm outline-2 outline-green-300 h-8 px-2 text-gray-800 hover:outline-green-600"
            name="publishDate"
            value={bookForm.publishDate}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-green-500 h-10 w-20 rounded-md cursor-pointer hover:bg-green-600"
        >
          Submit
        </button>
      </div>
      <div className="w-full mt-10">
        {/* Table Section */}
        <div className="w-full">
          <table className="w-full border border-green-400 ">
            <thead className="bg-green-400">
              <tr>
                <th className="border border-green-300 px-4 py-2">BooK Name</th>
                <th className="border border-green-300 px-4 py-2">
                  Book Title
                </th>
                <th className="border border-green-300 px-4 py-2">Author</th>
                <th className="border border-green-300 px-4 py-2">
                  Selling Price
                </th>
                <th className="border border-green-300 px-4 py-2">
                  Publish Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                className={`${index} % 2 === 0 ? 'bg-green-100' : 'bg-white'`}
              >
                <td className="border border-green-300 px-4 py-2">Vinistan</td>
                <td className="border border-green-300 px-4 py-2">Leenas</td>
                <td className="border border-green-300 px-4 py-2">Leenas</td>
                <td className="border border-green-300 px-4 py-2">Leenas</td>
                <td className="border border-green-300 px-4 py-2">Leenas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
