const app = require('express')();

app.get('/', (req, res) =>
    res.send("<html><head><title>🐳 Learn Docker</title></head><body><h3>Docker is fun 🐳</h3><body></html > ")
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`));