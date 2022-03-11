const express = require('express');
const PORT = 3001;
const app = express();
const path = require('path');
const noteDb = require('./db/db.json');
const utilities = require('./utils/utilities.js');
const fs = require('fs');
const uuid = utilities.uuid;
const readJson = utilities.readJson;
const writeJson = utilities.writeJson;

// Static Elements
app.use(express.static("public"))
// Middleware for posts
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Recycling a simple response message for root from a different server
// RES.SEND SHOULD NEVER FIRE. SHOULD BE OVERRIDDEN BY app.get("*") BELOW
app.get('/', (req, res) => {
    res.send(
      'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
    );
  });

//  If GET method is used for /api/notes, return db.json (const noteFile)
app.get('/api/notes', (req, res) => res.json(noteDb))

// If GET method is used for /notes, return notes.html from public
app.get("/notes", (req, res) => res.sendFile(path.resolve("public/notes.html")))

// If GET method is used for *, return index.html from public
app.get("*", (req, res) => res.sendFile(path.resolve("public/index.html")))

app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.info(req.body);
    const {title, text} = req.body;
    console.info(title);
    console.info(text);

    if (title, text) {
    console.info('Both title and body exist!') 

    const newNote = {
      title,
      text,
      id: uuid()
      }

    console.info(newNote);
    // const newNoteString = JSON.stringify(newNote);
    // console.info(newNoteString);

    readJson('./db/db.json', newNote)

    const response = {
      status: 'success',
      body: newNote
    }

    console.info(response);
    res.status(201).json(response)
  } else {
    res.status(500).json('Error in saving note: Missing title or body')
  }
})

app.listen(PORT, () => console.log(`Server is listening on localhost port ${PORT}!`))