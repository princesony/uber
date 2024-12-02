// index.js
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv"
dotenv.config()
 
// Create the Express app
const app = express();

// Middleware setup
app.use(morgan('dev'));  // Logger middleware
app.use(cors());          // Enable CORS
app.use(helmet());        // Set security-related HTTP headers
app.use(cookieParser()); // Parse cookies
app.use(express.json());  // Parse JSON request bodies

// Define routes
app.get('/', (req, res) => { 
  res.send('Hello, world!');
});

// Export the app so it can be imported elsewhere
export default app;
