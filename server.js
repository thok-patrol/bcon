const express = require('express');

const App = express();

App.use(express.urlencoded({
    extended: true
}))

App.use(express.json())

App.get('/server', (req, res) => {
    console.log('request made it here!');
    res.sendFile('Fischer.html', {root: __dirname}, (err) => {
        err ? console.log(err) : console.log('it worked')
    });
} )

App.get('/:file', (req, res) => {
    res.sendFile('/' + req.params.file, {root: __dirname});
})

App.listen(3000, (err) => {
    console.log('listening on port 3000')
} )