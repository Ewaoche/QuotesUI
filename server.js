//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/quotes/dist'));

// app.use(express.static(${__dirname}/front-end/dist/));

// app.get('*', (req, res) => {
//     res.sendFile(`./quotes/dist/index.html`); // load the single view file (angular will handle the page changes on the front-end)
// });



app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(8080);