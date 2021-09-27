const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/pages/home.html");
});


app.listen(3000, () => console.log('Listening...'));