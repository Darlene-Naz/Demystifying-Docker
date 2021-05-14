const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000; // For testing locally
const SERVER_ID = process.env.SERVER_ID || 2; // For testing locally

app.use("/static", express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  console.log({ server: SERVER_ID, port: PORT });
  let file = fs.readFileSync(
    path.join(__dirname, "/static/index.html"),
    "utf8"
  );
  file = file.replace(
    "Darlene",
    '{ SERVER_ID: <span style="color:yellow">' +
      SERVER_ID +
      '</span>, PORT: <span style="color:yellow">' +
      PORT +
      "</span> }"
  );
  res.send(file);
});

app.listen(PORT, function () {
  console.log(`Server ${SERVER_ID} running at ${PORT}`);
});
