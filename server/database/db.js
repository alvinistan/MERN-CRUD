import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("MongoDB Connected"));

    } catch (error) {
        console.log("Database Connection faild", error);
    }
}

export default connectDB;