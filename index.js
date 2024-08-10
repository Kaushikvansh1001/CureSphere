const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
const port = 5000; // Using port 3000 for the web server

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kaushik@hr26',
  database: 'curesphere_db'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as ID ' + connection.threadId);
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like your HTML)
app.use(express.static('public'));

// Handle form submission for users
app.post('/submit-user', (req, res) => {
  const { name, email, find_us, checkbox, text } = req.body;
  const sql = 'INSERT INTO users (name, email, find_us, message) VALUES (?, ?, ?, ?)';
  const values = [name, email, find_us, text];

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error inserting data:', err.stack);
      res.status(500).send('Database error');
      return;
    }
    res.send('User data submitted successfully');
  });
});

app.post('/submit-patient', (req, res) => {
  const { name, age, insurer, policy_number, blood_group } = req.body;
  const sql = `INSERT INTO patients (name, age, insurer, policy_number, blood_group) 
               VALUES (?, ?, ?, ?, ?)`;
  const values = [name, age, insurer, policy_number, blood_group];

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error inserting data:', err.stack);
      res.status(500).send('Database error');
      return;
    }
    res.send('Patient details submitted successfully');
  });
});



// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`); // Use the port variable here
});
