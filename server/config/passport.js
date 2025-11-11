import passport from "passport";
import pkg from "passport-google-oauth20";
const { Strategy: GoogleStrategy } = pkg;
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config(); // ✅ Load .env here so process.env is ready in this file


passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, Profile, done) => {
        try {
            //profile contains the user info from google
            const googleId = Profile.id;
            const email = Profile.emails?.[0]?.value;
            const name = Profile.displayName;
            const picture = Profile.photos?.[0]?.value;

            let user = await User.findOne({googleId});
            if(!user) {
                user = await User.create({
                    googleId,
                    name,
                    email,
                    picture,
                });
            }
            return done(null, user);
        } catch (error) {
            return done(error, null);
        }
    } 
)); 

// For session handling (optional, depending on your app's needs)
passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

export default passport;
