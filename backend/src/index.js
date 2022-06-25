require('dotenv').config();

const app = require('./app');
const db = require('./models');
const express = require('express');


const PORT = process.env.PORT || 3001;

const path = require('path')

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/src/index.js')));
console.log('hasta por lo menos llegue hrmo')

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../frontend/src/index.js'))});


db.sequelize.authenticate()
    .then(() => {
        console.log('Connection to db has been established successfully.');
        
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }).catch(err => {
            console.log('Unable to connect to the db:', err);
        }
);