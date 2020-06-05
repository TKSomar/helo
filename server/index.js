require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const ctrl = require('./controller');

const app = express();

app.use(express.json());
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 1000 * 60 * 60 * 24},
        secret: SESSION_SECRET
    })
);


//auth endpoints
app.post('/api/auth/login', ctrl.login);
app.post('/api/auth/register', ctrl.register);
app.delete('/api/auth/logout', ctrl.logout);

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then ( db => {
    app.set('db', db)
    console.log('Connected to db.')
    app.listen( SERVER_PORT, () => console.log(`Connected on port ${SERVER_PORT}`))
}).catch( err => console.log(err));