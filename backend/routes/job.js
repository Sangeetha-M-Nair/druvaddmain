const express = require('express');
const router = express.Router();
const User = require('../db/schemas');
const Company = require('../db/companySchema');
const Job = require('../db/jobSchema');

//posting a job
router.post('/:id/addJob', async (req, res) => {
  try {
    console.log(req.body);
    console.log('request recieved at job post');
    const id = req.params.id;
    const companyName = req.body.companyName;
    console.log(req.body);
    //console.log(companyName);
    let companyData = await Company.findOne({ 'name': companyName });
    //console.log(req.params.id);
    console.log(companyData);
    if (req.session.passport.user === companyData.userId.toString() || companyData.HrAdmin.includes(req.params.id)) {
      console.log('Yeah we can send data');
      const data = await Job.create({ ...req.body, userId: req.session.passport.user });
      console.log('after adding');
      console.log(data);
      res.json(data);
    }
    else {
      res.json(null);
    }
  }
  catch (err) {
    console.log(err);
    res.status(400);
  }
})

//fetching all the jobs 
// To Get Job Post
router.get('/getAllJobs', async (req, res) => {
  try {
    const jobPost = await Job.find().sort({ date: -1 });
    res.status(200).json(jobPost);
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
)


module.exports = router;