const path = require('path');
const express = require('express');
const http = require('http');
const app = express();

const server = http.createServer(app);
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Webapp running on http://localhost:${port}`);
});
