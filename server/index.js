import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import session from "express-session";
import passport from "passport";
import "./config/passport.js";
import connectDB from "./database/db.js";
import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

// CORS – allow frontend
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Session (needed for Passport)
app.use(
  session({
    secret: "some_session_secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// MongoDB connect
connectDB()
// ---------- AUTH ROUTES ----------

// Step 1: Redirect user to Google
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Step 2: Google redirects back here
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    // Create JWT
    const token = jwt.sign(
      {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        picture: req.user.picture,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Option 1: send token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true in production with HTTPS
    });

    // Redirect back to frontend after login
    res.redirect(`${process.env.CLIENT_URL}/dashboard`);
  }
);

app.use('/api/books', bookRoutes);

// Example: Protected route to get current user
app.get("/me", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Not logged in" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json(decoded);
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
