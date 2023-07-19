require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const app = express();
const mysql = require('mysql2');


// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
  
// Create a MySQL pool to handle connections
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

app.use(express.json());

// Route to add a new project to the database
app.post('/api/projects', (req, res) => {
  const { name, description, start_date, end_date } = req.body;

  const query = `INSERT INTO projects (name, description, start_date, end_date) VALUES (?, ?, ?, ?)`;

  pool.query(query, [name, description, start_date, end_date], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error inserting project into the database' });
    } else {
      res.status(201).json({ message: 'Project added successfully' });
    }
  });
});

// Start the server
const PORT = 3000; // Change this to your desired port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
