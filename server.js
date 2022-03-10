const express = require('express');
const noteDb = require('./db/db.json')
const PORT = 3001;
const app = express();
const path = require('path');
const CODEHERE = "Oops! This shouldn't appear anywhere!"

// Static Elements
app.use(express.static("public"))

// Recycling a simple response message for root from a different server
app.get('/', (req, res) => {
    res.send(
      'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
    );
  });

//  If GET method is used for /db, return db.json (const noteFile)

app.get('/db', (req, res) => res.json(noteDb))

// If GET method is used for /notes, return notes.html from public
app.get("/notes", (req, res) => res.sendFile(path.resolve("/notes.html")))


// If GET method is used for *, return index.html from public
app.get("*", (req, res) => res.sendFile(path.resolve("/index.html")))


app.listen(PORT, () => 
  console.log(`Server is listening on localhost port ${PORT}!`)
)