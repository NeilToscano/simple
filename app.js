const express = require('express');
const http = require('http');
require('dotenv').config()

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send("hello");
});



const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
