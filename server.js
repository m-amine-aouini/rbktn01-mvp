let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/rbktn_mvp', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);
let db = mongoose.connection

db.on('error', (err) => console.log(err));
db.once('open', () => console.log('mongoose connected'));

require('./models/seller');

require('./routes/Acc')(app);

let port = 1019;

app.listen(port, () => console.log('Server connected on port: ' + port))