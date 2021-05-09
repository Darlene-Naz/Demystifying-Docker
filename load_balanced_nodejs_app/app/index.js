const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000; // For testing locally
const SERVER_ID = process.env.SERVER_ID || 2; // For testing locally

app.use('/static', express.static(path.join(__dirname, 'static')))

app.get("/", (req, res) => {
    console.log({ server: SERVER_ID, port: PORT })
    res.sendFile(path.join(__dirname, "/static/index.html"));
});

app.listen(PORT, function() {
    console.log(`Server ${SERVER_ID} running at ${PORT}`);
});