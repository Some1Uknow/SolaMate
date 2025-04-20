import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import waitlistRoutes from "./routes/waitlist.js";
import dotenv from "dotenv";
import https from "https";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
// Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/api/waitlist", waitlistRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the SolaMate API!");
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  
  // Self-ping mechanism
  if (process.env.NODE_ENV === 'production') {
    const PING_INTERVAL = 14 * 60 * 1000; // 14 minutes
    const appUrl = process.env.APP_URL || `https://your-app-name.onrender.com`;
    
    setInterval(() => {
      https.get(`${appUrl}/health`, (res) => {
        console.log('Self-ping successful, status:', res.statusCode);
      }).on('error', (err) => {
        console.error('Self-ping failed:', err.message);
      });
    }, PING_INTERVAL);
  }
});
