require('dotenv').config()
const errorHandler = require('./middlewares/errorHandler')

const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./routers');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(router);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Online on http://localhost:${PORT}`);
})