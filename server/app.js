require('dotenv').config()
const errorHandler = require('./middlewares/errorHandler')

const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./routers');

app.use(express.json());

app.use(router);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Online on http://localhost:${PORT}`);
})