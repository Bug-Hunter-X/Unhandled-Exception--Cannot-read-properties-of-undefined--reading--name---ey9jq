const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Check if req.user is defined before accessing its properties
  if (req.user) {
    res.send(`Hello, ${req.user.name}!`);
  } else {
    res.send('Hello, guest!');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});