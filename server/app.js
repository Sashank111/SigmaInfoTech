const express = require('express');
const cors = require('cors');
const registerRouter = require('./router/registerRouting');
const serviceRouter = require('./router/serviceRouter');
const subServiceRouter = require('./router/subServiceRouting');
const bookServiceRouter = require('./router/bookServiceRouter');
const contactUsRouter = require('./router/contactusRouting');
const offerRouter = require('./router/offerRouting');
require('dotenv').config(); // Load .env before database connection
require('./dbconfig/dbconfig'); // Connect to MongoDB Atlas

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Routers
app.use('/', registerRouter);
app.use('/', serviceRouter);
app.use('/', subServiceRouter);
app.use('/', bookServiceRouter);
app.use('/', contactUsRouter);
app.use('/', offerRouter);

// Server start
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});