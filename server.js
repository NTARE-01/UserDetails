const express = require('express');
const connectDB = require('./db'); // Import the connectDB function
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Import the user routes

require('dotenv').config();

const app = express();

// Connect to the database
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
