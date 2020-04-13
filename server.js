let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('dotenv').config();

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_DB || 'mongodb://localhost:27017/rbktn_mvp', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

let db = mongoose.connection

db.on('error', (err) => console.log(err));
db.once('open', () => console.log('mongoose connected'));

require('./models/seller');
require('./models/product');

require('./routes/accRoutes')(app);
require('./routes/productRoutes')(app);

if (process.env.NODE_ENV === 'production') {

  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}

let port = 1019;

app.listen(port, () => console.log('Server connected on port: ' + port))