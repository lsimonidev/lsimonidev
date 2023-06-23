const express = require('express');
const db = require('./db');

const router = express.Router();


//Get job experience
router.get('/', async (req, res) => {
    dbClient = await db.dbConnect();

    const personalData = await dbClient.db('personal').collection('personal_data');
    res.send(await personalData.find({}).toArray());
})

module.exports = router;