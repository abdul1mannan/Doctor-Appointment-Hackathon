const express = require("express");
const cors = require('cors');
const app = express();
const doctors = require('./routes/api/doctors');
const authsDoctor = require('./routes/api/authDoctor');
const users = require('./routes/api/users');
const authsUser = require('./routes/api/authUser');
const profile = require('./routes/api/profile');
const appointment = require('./routes/api/appointment');
const path = require("path")

// CORS configuration
app.use(cors({
    origin: ['http://localhost:3000', 'https://cure-me.onrender.com'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ extended: false}));

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: ".env" });
   }

//    APi Routes
app.use('/api/doctors', doctors);
app.use('/api/authDoctor', authsDoctor);
app.use('/api/users', users);
app.use('/api/authUser', authsUser);
app.use('/api/profile', profile);
app.use('/api/appointment', appointment);



__dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'))
    });
} else {
    app.get('/', (req, res) => {
        res.send('Server is Running! 🚀');
    });
}


module.exports  = app;
