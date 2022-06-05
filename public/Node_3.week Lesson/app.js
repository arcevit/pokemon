const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true });

const bodyParser = require('body-parser');
const postApi = require('./postsApi');
const userApi = require('./userApi');
//console.log(app)
//middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/postApi', postApi);
app.use('/api', userApi);

app.listen(3004, () => {
	console.log('Server is running on port 3004');
});
