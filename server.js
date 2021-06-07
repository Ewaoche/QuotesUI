const express = require('express')

const path = require('path');

const app = express();

app.use(express.static('./dist/Quotes'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'dist/Quotes/' })

})

app.listen(8080)