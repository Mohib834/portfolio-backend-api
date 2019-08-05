const express = require('express');
const app = express();
const port = process.env.PORT;

const bodyParser = require('body-parser')
const indexRouter = require('./routers/index.js');
const cors = require('cors');

//Database
require('./db/mongoose.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

//Routers
app.use(indexRouter);

app.listen(port, () => console.log('Server Started on port ' + port));