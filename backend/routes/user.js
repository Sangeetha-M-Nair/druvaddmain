const express = require('express');
const router = express.Router();
const User = require('../db/schemas');
const Company = require('../db/companySchema');
const Group = require('../db/schemas/group');
const makeid = require('../utils/creatingRefCode');
//current logged in user's user id is stored in req.session.passport.user

//getting the current logged in user
router.get("/getCuser", async (req, res) => {
    if (req.isAuthenticated()) {
        //finding user
        const user = await User.findById(req.session.passport.user);
        //sendig user
        res.status(200).json({
            success: true,
            message: "successfull",
            user: user,
        });
    } else {
        //if there is no session
        res.status(200).json('Not authenticated');
    }
});


//logging out the current user 
router.get('/logout', (req, res) => {
    req.logOut(err => {
        if (err) res.json('Couldnt Logout'); //if there was some error during logout
        else res.json('LO'); //LO response means logged out
    });
})


//updating the logged in user
router.patch('/update', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const data = await User.findByIdAndUpdate(
                req.session.passport.user,
                req.body,
                {
                    new: true
                });

            //sending the updated response back to the user 
            res.status(200).json(data);
        }
        catch (err) {
            res.status(500);
        }

    }
    else {
        //if request not authenticated 
        res.status(400);
    }
});


//sending user for a particular user id
router.get('/profile/:id', async (req, res) => {
    //id contains the user id to be fetched
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        res.status(200).json(user);
    }
    catch (err) {
        res.status(400);
    }
})


//sending all the users as response
router.get('/allusers', async (req, res) => {
    try {
        const data = await User.find({}).select({ _id: 1, firstName: 1, lastName: 1 });
        res.json(data);
    }
    catch (err) {
        console.log(err);
    }
})



//deleting the current logged in user 
router.delete('/delete-user', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            const deletedUser = await User.findByIdAndDelete(req.session.passport.user);
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


//creating a refCode for the user 
router.patch('/createrefcode', async (req, res) => {
    try {
        console.log('request recieved for creating ref code');

        if (req.isAuthenticated()) {
            const refCode = makeid(7); //creates the random ref code of given length
            const data = await User.findByIdAndUpdate(
                req.session.passport.user,
                {
                    referCode: refCode
                },
                {
                    new: true
                });
            res.status(200).json(data);
        }
        else {
            res.status(400);
        }
    }
    catch (err) {
        console.log(err);
        res.status(500);
    }
})

//if a user uses a refer code
router.patch("/userefcode", async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            //Finding whose refer code is the user trying to use
            const whoseReferCode = await User.findOne({ referCode: req.body.refCode });

            //if the user is not using his own refer code
            if (req.session.passport.user !== whoseReferCode._id.toString()) {

                //adding the id of the user using refer code to refer code owner's referrals
                const referingUser = await User.findByIdAndUpdate(whoseReferCode._id,
                    {
                        $addToSet: {
                            referals: req.session.passport.user
                        }
                    }, {
                    new: true
                }
                );
                console.log(referingUser);

                //since we using set if some old referral retries to use the refer code then length
                //will stay unchanged and nothing will be returned  
                if (referingUser.referals.length === whoseReferCode.referals.length) {
                    res.json(null);
                }
                else {
                    //if the length has increased then valid the ref code user gets some points 
                    const data = await User.findByIdAndUpdate(req.session.passport.user, {
                        $inc: { points: 1 }
                    }, { new: true });
                    res.status(200).json(data);
                }
            }
            else {
                //console.log('equal');
                res.json(null);
            }
        }
    } catch (err) {
        console.log(err);
        res.status(500);
    }
})

//joining a group 
router.put('/join/group/:gid', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const group = await Group.findById(req.params.gid);
            if (group.memberApproveRequired) {
                const group1 = await Group.findByIdAndUpdate(req.params.gid, {
                    $addToSet: {
                        memberRequests: req.session.passport.user
                    }
                });
                res.status(200).json({ msg: 'request pending for approval', group: group1 });
            }
            else {
                const group1 = await Group.findByIdAndUpdate(req.params.gid, {
                    $addToSet: {
                        members: req.session.passport.user
                    }
                });
                res.status(200).json({ msg: 'group joined you can post now', group: group1 });
            }

        }
        catch (err) {
            res.status(500);
        }
    }
    else {
        res.status(400);
    }
})


//declining an invite request 
//iid is invite id 
router.put('/declineInvite/:iid', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const user = await User.findByIdAndUpdate(req.session.passport.user, {
                $pull: {
                    'groupInvites': {
                        _id: req.params.iid
                    }
                }
            });
            res.status(200).json(user);
        }
        catch (err) {
            console.log(err);
            res.status(500);
        }
    }
    else {
        res.status(400);
    }
})


// To add the followers and following
router.put('/following/:id', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            await User.findByIdAndUpdate(req.params.id, {
                $addToSet: { followers: req.session.passport.user }
            })
            await User.findByIdAndUpdate(req.user.id, {
                $addToSet: { following: req.params.id }
            })
            return res.status(200).json({ success: true, message: "Followed Successfully" })
        }
        else {
            res.status(400);
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
})


// To Unfollow the user
router.put('/unfollowing/:id', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            await User.findByIdAndUpdate(req.params.id, {
                $pull: { followers: req.user.id }
            })
            await User.findByIdAndUpdate(req.user.id, {
                $pull: { following: req.params.id }
            })
            return res.status(200).json({ success: true, message: "Unfollowed Successfully" })
        }
        else {
            res.status(400);
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
})


// To Follow the Companies
router.put('/comFollowing/:id', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            await Company.findByIdAndUpdate(req.params.id, {
                $push: { company_Followers: req.session.passport.user }
            })
            await User.findByIdAndUpdate(req.session.passport.user, {
                $push: { Company_following: req.params.id }
            })

            return res.status(200).json({ success: true, message: "Followed Successfully" })
        }
        else {
            res.status(400);
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
})


// To UnFollow the Companies
router.put('/comUnFollowing/:Id', async (req, res) => {
    try {
        if (req.isAuthenticated()) {
            await Company.findByIdAndUpdate(req.params.Id, {
                $pull: { company_Followers: req.user.id }
            })
            await User.findByIdAndUpdate(req.user.id, {
                $pull: { Company_following: req.params.Id }
            })

            return res.status(200).json({ success: true, message: "Followed Successfully" })

        }
        else {
            res.status(400);
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
})

//get the users who has used my promo code 
router.get('/getPromoUsers', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const user = await User.findById(req.session.passport.user);
            const users = await User.find({
                _id: {
                    $in: user.referals
                }
            }).select({ _id: 1, firstName: 1, lastName: 1 });

            res.status(200).json(users);
        }
        catch (err) {
            console.log(err);
            res.status(500);
        }
    }
    else {
        res.status(400);
    }
})

//friendRequest
router.put('/sendFriendRequest/:id', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            //adding request to the friend requests
            const user = await User.findByIdAndUpdate(req.params.id, {
                $addToSet: {
                    friendRequests: req.session.passport.user
                }
            }, {
                new: true
            });
            res.status(200).json('success');
        }
        catch (err) {
            console.log(err);
        }
    }
    else {
        res.status(400);
    }
})

//accepting a friend request
router.put('/friendRequestAccept/:id', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const user = await User.findByIdAndUpdate(req.session.passport.user, {
                $pull: {
                    friendRequests: req.params.id
                },
                $addToSet: {
                    friends: req.params.id
                }
            });
            //adding the logged in user to the friend list of the one who sent the friend request 
            const user2 = await User.findByIdAndUpdate(req.params.id, {
                $addToSet: {
                    friends: req.session.passport.user
                }
            }, {
                new: true
            });
            //console.log(user);
            console.log('the one who sent the friend request');
            console.log(user2);
            res.status(200).json('accepted');
        }
        catch (err) {
            console.log(err);
            res.status(500);
        }
    }
    else {
        res.status(200);
    }
});

//rejecting friend requests
router.put('/friendRequestReject/:id', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const user = User.findByIdAndUpdate(req.session.passport.user, {
                $pull: {
                    friendRequests: req.params.id
                }
            });
            res.status(200).json('rejected');
        }
        catch (err) {
            console.log(err);
            res.status(500);
        }
    }
    else {
        res.status(400);
    }
})

//displaying all the friend requests
router.get('/displayfriendRequests', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const friendRequestIds = await User.findById(req.session.passport.user);
            //details of the users who send friend request
            console.log(friendRequestIds);
            const friendRequestsWithNames = await User.find({
                _id: {
                    $in: friendRequestIds.friendRequests
                }
            }).select({ _id: 1, firstName: 1, lastName: 1 });
            console.log(friendRequestsWithNames);
            res.status(200).json(friendRequestsWithNames);
        }
        catch (err) {
            console.log(err);
            res.status(500);
        }
    }
    else {
        res.status(400);
    }
})

router.post('/givenUsers', async (req, res) => {
    try {
        console.log('________________________________________________');
        //console.log(req);
        console.log(req.body);
        const users = await User.find({
            _id: {
                $in: req.body.admins
            }
        }).select({ 'firstName': 1, 'lastName': 1 });
        console.log(users);
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500);
        console.log(err);
    }
})



router.get('/all', async (req, res) => {
    try {
        const user = await User.find({});
        console.log(user);
        res.json(user);
    }
    catch (err) {
        console.log(err);
    }
})


module.exports = router;