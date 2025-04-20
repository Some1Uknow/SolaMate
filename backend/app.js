import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import waitlistRoutes from "./routes/waitlist.js";
import dotenv from "dotenv";
import https from "https";
import helmet from "helmet";
import rateLimit from 'express-rate-limit';
import xss from 'xss-clean';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Security Configurations
const whitelist = [ `${process.env.FRONTEND_URL}`];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  maxAge: 86400 // 24 hours
};

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Middleware
app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(xss());
app.use(limiter);
app.use(bodyParser.json({ limit: '10kb' })); // Limit body size
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1); // Trust first proxy
}

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
