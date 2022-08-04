const express = require('express');
const router = express.Router();
const User = require('../db/schemas');
const Job = require('../db/jobSchema');
const Company = require('../db/companySchema');
const passport = require('passport');

router.get('/getUsers', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            const admin = await User.findById(req.session.passport.user);
            if (admin.role == 'User') {
                console.log(admin);
                return res.status(400).json({ success: false, message: "You are not allowed" });
            }
            const users = await User.find({ role: { $ne: "admin" } });
            return res.status(200).json({ success: true, users: users });
        }
        else {
            res.status(400);
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal Server Error" })
    }
})


// change user Status  --> Must be admin or subAdmin
router.put('/changeStatus/:id', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            const admin = await User.findById(req.session.passport.user);
            if (admin.role == 'User' || admin.role == 'fresher') {
                return res.status(400).json({ success: false, message: "You are not allowed" });
            }
            const jobs = await Job.deleteMany({ userId: req.params.id });
            const user = await User.findByIdAndUpdate(req.params.id, { $set: { status: req.body.status } });
            return res.status(200).json({ success: true, message: "User Status Updated successfully" });
        }
        else {
            res.status(400);
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal Server Error" })
    }
})

//blocking posts and comments for 54 years(indefinite)
router.put('/user/blockPosts/permanent/:id', async(req, res)=>{
    try{
        if(req.isAuthenticated()){
            console.log(req.params);
            const date = new Date();
            date.setDate(date.getDate() + 20000); //posts blocked for 54 years 
            console.log(date);
            const admin = await User.findById(req.session.passport.user);
            if(admin.role !== 'admin'){
                res.status(400);
            }
            else{
                const user = await User.findByIdAndUpdate(req.params.id, 
                    {
                        $set : {
                            postsBlockedUntil : date,
                            commentsBlockedUntil : date
                        }
                    },
                    {new : true}
                    );
                res.status(200).json(user);

            }

        }
        
    }
    catch(err){
        console.log(err);
        res.status(500);
    }
})


//blocking the posts of the user for given number of days  
router.put('/user/blockPosts/:id/:days', async(req, res)=>{
    if(req.isAuthenticated()){
        console.log(req.params);
        const date = new Date();
        date.setDate(date.getDate() + parseInt(req.params.days));
        console.log(date);
        try{
            const admin = await User.findById(req.session.passport.user);
            if(admin.role !== 'admin'){
                res.status(400);
            }
            else{
                const user = await User.findByIdAndUpdate(req.params.id, 
                    {
                        $set : {
                            postsBlockedUntil : date
                        }
                    },
                    {new : true}
                    );
                console.log(user);
                res.status(200).json(user);

            }
        }
        catch(err){
            console.log(err);
            res.status(500);
        }

    }
    else{
        res.status(400);
    }
})




//blocking the comments of the user for given number of days 
router.put('/user/blockComments/:id/:days', async(req, res)=>{
    if(req.isAuthenticated()){
        const date = new Date();
        date.setDate(date.getDate() + parseInt(req.params.days));
        console.log(date);
        try{
            const admin = await User.findById(req.session.passport.user);
            if(admin.role !== 'admin'){
                res.status(400);
            }
            else{
                const user = await User.findByIdAndUpdate(req.params.id, 
                    {
                        $set : {
                            commentsBlockedUntil : date
                        }
                    },
                    {new : true}
                    );
                res.status(200).json(user);

            }
        }
        catch(err){
            console.log(err);
            res.status(500);
        }

    }
    else{
        res.status(400);
    }
})



//unblocking the user(set the blocked dates to today - 1)
router.put('/user/unblock/:id', async(req, res)=>{
    try{
        if(req.isAuthenticated()){
            const date = new Date();
            date.setDate(date.getDate() - 1); //posts blocked for 54 years 
            console.log(date);
            const admin = await User.findById(req.session.passport.user);
            if(admin.role !== 'admin'){
                res.status(400);
            }
            else{
                const user = await User.findByIdAndUpdate(req.params.id, 
                    {
                        $set : {
                            postsBlockedUntil : date,
                            commentsBlockedUntil : date
                        }
                    },
                    {
                        new : true
                    }
                    );
                console.log(user);
                res.status(200).json(user);

            }

        }
        
    }
    catch(err){
        console.log(err);
        res.status(500);
    }
})





// To create subAdmin  --> Must be admin only
router.put('/crateSubAdmin/:id', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            const admin = await User.findById(req.session.passport.user);
            if (admin.role != 'admin' && admin.role != 'subAdmin') {
                return res.status(400).json({ success: false, message: "You are not allowed" });
            }
            const subAdmin = await User.findByIdAndUpdate(req.params.id, { $set: { role: req.body.role } });
            return res.status(200).json({ success: true, message: "subAdmin is created successfully" });

        }
        else {
            res.status(400);
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal Server Error" })
    }
})

// To get All job
router.get('/getJobs', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            const admin = await User.findById(req.session.passport.user);
            if (admin.role == 'User') {
                console.log(admin);
                return res.status(400).json({ success: false, message: "You are not allowed" });
            }
            const jobs = await Job.find();
            return res.status(200).json({ success: true, jobs: jobs });

        }
        else {
            res.status(400);
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
})

// To Delete User ID  ---> Must be admin
router.delete('/delete-job/:id', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            const admin = await User.findById(req.session.passport.user);
            if (admin.role != 'admin') {
                return res.status(400).json({ success: false, message: "You are not allowed" });
            }
            const job = await Job.findByIdAndDelete(req.params.id);
            return res.status(200).json({ success: true, message: "User Deleted Successfully" });

        }
        else {
            res.status(400);
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
})


// To get all Companies Details  --> Must not be the User
router.get('/getCompanies', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            const admin = await User.findById(req.session.passport.user);
            if (admin.role == 'User') {
                console.log(admin);
                return res.status(400).json({ success: false, message: "You are not allowed" });
            }
            const companies = await Company.find();
            return res.status(200).json({ success: true, companies });
        }
        else {
            res.status(400);
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
})

// To update company Details
router.put('/updateCompanyDe/:id', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            const admin = await User.findById(req.session.passport.user);
            if (admin.role == 'User') {
                console.log(admin);
                return res.status(400).json({ success: false, message: "You are not allowed" });
            }
            const companyDe = await Company.findByIdAndUpdate(req.params.id, { $set: req.body });
            return res.status(200).json({ success: true, message: "Updated Successfully" });
        }
        else {
            res.status(400);
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
})

// To Delete Company Details
router.delete('/deleteCompany/:id', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            const admin = await User.findById(req.session.passport.user);
            if (admin.role != 'admin' && admin.role != 'subAdmin') {
                return res.status(400).json({ success: false, message: "You are not allowed" });
            }
            const Comp = await Company.findByIdAndDelete(req.params.id);
            return res.status(200).json({ success: true, data: Comp });
        }
        else{
            res.status(400);
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
})

module.exports = router;

