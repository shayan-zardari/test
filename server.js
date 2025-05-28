const express = require("express");
const app = express();

app.use(express.json());
// app.use(express.urlencoded({extended: true}));
app.use('/api/students', require('./api/students'));

app.get('/test', (req, res) => {
    return res.status(200).json({
        'message': "route found"
    });
});


app.get('/', (req, res) => {
    res.status(404).json({
        'message': "route not found"
    });
});

app.use(express.static("public"));

app.listen(3000);