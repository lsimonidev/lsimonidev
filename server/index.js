const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const academicAchievements = require('./routes/api/academicAchievements.js');
const jobExperience = require('./routes/api/jobExperience.js');
const personalData = require('./routes/api/personalData.js');

app.use('/api/academic_achievements',academicAchievements);
app.use('/api/job_experience',jobExperience);
app.use('/api/personal_data',personalData);

const port = process.env.PORT || 5000;

app.listen(port, console.log('Server started on port', port))