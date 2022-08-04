const express = require('express');
const router = express.Router();
const User = require('../db/schemas');
const Company = require('../db/companySchema');


//adding a new company 
router.post('/postcompany', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            //creating the company with logged in users id as user id 
            const response = await Company.create({
                ...req.body,
                userId: req.session.passport.user
            });
            res.status(200).json({ success: true });
        }
        else {
            res.status(400).json('Unauthorized');
        }
    }
    catch (err) {
        console.log(err);
        res.status(500);
    }
})

//get a particular company with its id 
router.get('/getCompany/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Company.findById(id);
        res.json(data);
    }
    catch (err) {
        res.status(400).json('Error Occurred');
        console.log(err);
    }
})

//getting all the companies of a user
router.get('/getCompanies/:uid', async (req, res) => {
    try {
        //uid is the id of the user 
        const data = await Company.find({ userId: req.params.uid });
        res.status(200).json(data);
    }
    catch (err) {
        res.status(400);
    }
})


//getting all the companies in the database 
router.get('/allcompanies', async (req, res) => {
    try {
        const data = await Company.find({}).select({_id : -1, name : 1});
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json('err');
    }
})


//adding hr admins to the company 
router.patch('/:id/addHr', async (req, res) => {
    try {
        const data = await Company.findByIdAndUpdate(
            req.params.id,
            {
                $push: {
                    'HrAdmin': req.body.id
                }
            },
            {
                new: true
            });
        if (data) {
            res.status(200).json('success');
        }

    }
    catch (err) {
        console.log(err);
        res.status(500);
    }
})



module.exports = router;