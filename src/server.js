require('dotenv/config');

const cors = require('cors');
const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);