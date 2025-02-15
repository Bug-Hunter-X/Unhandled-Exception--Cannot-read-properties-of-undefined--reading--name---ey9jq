const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Deliberate mistake: Trying to access a property of undefined
  const user = req.user;
  res.send(`Hello, ${user.name}!`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});