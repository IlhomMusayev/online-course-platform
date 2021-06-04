const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const psql = require('./modules/pg');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(async (req, res, next) => {
    req.psql = await psql;
    next();
});

app.listen(8000, () => {
    console.log('your server ready at http://localhost:8000');
});

fs.readdir(path.join(__dirname, "routes"),  async (err, files) => {
    await files.forEach(file => {
        const route = require(path.join(__dirname, "routes", file));
        if (route.path && route.router) app.use(route.path, route.router);
    })
    await app.use((_, res) => res.status(404).json({
        ok: false,
        message: "Not found"
    }))
})