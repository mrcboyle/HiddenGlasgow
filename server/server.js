const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());


const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(express.json());


MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('locations_hub');
        const locationsCollection = db.collection('locations');
        const locationsRouter = createRouter(locationsCollection);
        const quizCollection = db.collection('quiz');
        const quizRouter = createRouter(quizCollection);
        app.use('/api/locations', locationsRouter)
        app.use('/api/quiz', quizRouter)
    })
    .catch(console.error);

app.listen(9000, function () {
    console.log(`Listening on port ${this.address().port}`);
});