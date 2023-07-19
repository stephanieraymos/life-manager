require('dotenv').config(); // Load environment variables from .env file
const cors = require('cors');

const express = require('express');
const app = express();
const mysql = require('mysql2');

app.use(cors());

// Start the server
app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
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

// Route to retrieve all projects from the database
app.get('/api/projects', (req, res) => {
    const query = `SELECT * FROM projects`;
  
    pool.query(query, (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching projects from the database' });
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  // Route to update a project in the database
  app.put('/api/projects/:id', (req, res) => {
    const projectId = req.params.id;
    const { name, description, start_date, end_date } = req.body;
    const query = `UPDATE projects SET name = ?, description = ?, start_date = ?, end_date = ? WHERE id = ?`;
  
    pool.query(query, [name, description, start_date, end_date, projectId], (err, res) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error updating project in the database' });
      } else {
        res.status(200).json({ message: 'Project updated successfully' });
      }
    });
  });

  // Route to delete a project from the database
app.delete('/api/projects/:id', (req, res) => {
    const projectId = req.params.id;
    const query = `DELETE FROM projects WHERE id = ?`;
  
    pool.query(query, [projectId], (err, res) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error deleting project from the database' });
      } else {
        res.status(200).json({ message: 'Project deleted successfully' });
      }
    });
  });

// Start the server
const PORT = 4000; // Change this to your desired port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
