const express = require('express');
const db = require('./db');

const router = express.Router();


//Get job experience
router.get('/', async (req, res) => {
    dbClient = await db.dbConnect();

    const jobExperience = await dbClient.db('personal').collection('job_experience');
    res.send(await jobExperience.find({}).toArray());
})

module.exports = router;