const express = require('express');
const db = require('./db');

const router = express.Router();


//Get academic achievements
router.get('/', async (req, res) => {
    dbClient = await db.dbConnect();

    const academicAchievements = await dbClient.db('personal').collection('academic_achievements');
    res.send(await academicAchievements.find({}).toArray());
})

module.exports = router;