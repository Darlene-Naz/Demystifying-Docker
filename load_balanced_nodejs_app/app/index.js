const express = require("express");
const path = require("path")

const app = express();
const PORT = process.env.PORT || 3000; // For testing locally
const SERVER_ID = process.env.SERVER_ID;

app.get("/", (req, res) => {
  // res.send({ server: SERVER_ID, port: PORT });
  res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.listen(PORT, function () {
  console.log(`Server ${SERVER_ID} running at ${PORT}`);
});
