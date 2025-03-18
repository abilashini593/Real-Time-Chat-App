import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();  

export const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        
        // Debugging: Check if .env is loaded correctly
        if (!uri) {
            throw new Error("❌ MONGODB_URI is undefined. Check your .env file.");
        }

        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        process.exit(1);
    }
};
