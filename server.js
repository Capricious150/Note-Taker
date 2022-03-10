const express = require('express');
const PORT = 3001;
const app = express();
const path = require('path');
const noteDb = require('./db/db.json')

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
app.get("/notes", (req, res) => res.sendFile(path.resolve("/notes.html")))

// If GET method is used for *, return index.html from public
app.get("*", (req, res) => res.sendFile(path.resolve("/index.html")))

app.post('/api/notes', (req, res) => {
    res.send("CODE FOR POST METHOD GOES HERE")
})


app.listen(PORT, () => 
  console.log(`Server is listening on localhost port ${PORT}!`)
)