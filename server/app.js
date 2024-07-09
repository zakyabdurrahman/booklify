require('dotenv').config()

const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./routers');

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
    console.log(`Online on http://localhost:${PORT}`);
})