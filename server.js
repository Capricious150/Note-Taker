const express = require('express');
const noteFile = require('./db/db.json')
const PORT = 3001;
const app = express();

// Static Elements
app.use(express.static("public"))

// Recycling a simple response message for root from a different server
app.get('/', (req, res) => {
    res.send(
      'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
    );
  });

//  If GET method is used for /notes, return db.json (const noteFile)
app.get('/notes', (req, res) => res.json(noteFile))


app.listen(PORT, () => 
  console.log(`Server is listening on localhost port ${PORT}!`)
)