const express = require('express');
const router = express.Router();
const Group = require('../db/schemas/group');
const User = require('../db/schemas');
const Post = require('../db/Post');

router.post('/createGroup', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const group = await Group.create({ ...req.body, superAdmin: req.session.passport.user });
            console.log(group);
            res.status(200).json(group);
            //adding super admin to members list
            const addingAdmin = await Group.findByIdAndUpdate(group._id,
                {
                    $push: {
                        members: group.superAdmin
                    }
                },
                {
                    new: true
                });
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

router.get('/viewGroups', async (req, res) => {
    try {
        const groups = Group.find({});
        res.status(200).json(groups);
    }
    catch (err) {
        console.log(err);
        res.status(500);
    }
})

//this api endpoint returns thr groups that the user hasn't joined
router.get('/viewGroups/toJoin', async (req, res) => {
    try {
        //returns group that logged in user hasn't joined  
        const groups = await Group.find({
            members: {
                $nin: [req.session.passport.user]
            }

        });
        console.log(groups);
        res.status(200).json(groups);
    }
    catch (err) {
        console.log(err);
        res.status(500);
    }
})

//returns the joined groups of user 
router.get('/viewGroups/joined', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const groups = await Group.find({ members: req.session.passport.user });
            res.status(200).json(groups);
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

router.get('/viewGroup/one/:id', async (req, res) => {
    try {
        const group = await Group.findById(req.params.id);
        res.status(200).json(group);
    }
    catch (err) {
        console.log(err);
        res.status(500);
    }
})

router.put('/settings/postApprove/on/:gid', async (req, res) => {
    if (req.isAuthenticated()) {
        const group = await Group.findById(req.params.gid);
        if (req.session.passport.user === group.superAdmin.toString() || group.admins.includes(req.session.passport.user)) {
            const g = await Group.findByIdAndUpdate(req.params.gid, {
                $set: {
                    postApproveRequired: true
                }
            },
                {
                    new: true
                });

            res.status(200).json(g);
        }

    }
    else {
        res.status(400);
    }

})


router.put('/settings/postApprove/off/:gid', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const group = await Group.findById(req.params.gid);
            if (req.session.passport.user === group.superAdmin.toString() || group.admins.includes(req.session.passport.user)) {
                const g = await Group.findByIdAndUpdate(req.params.gid, {
                    $set: {
                        postApproveRequired: false
                    }
                },
                    {
                        new: true
                    });

                res.status(200).json(g);
            }
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

router.put('/settings/memberApprove/on/:gid', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const group = await Group.findById(req.params.gid);
            if (req.session.passport.user === group.superAdmin.toString() || group.admins.includes(req.session.passport.user)) {
                const g = await Group.findByIdAndUpdate(req.params.gid, {
                    $set: {
                        memberApproveRequired: true
                    }
                },
                    {
                        new: true
                    });

                res.status(200).json(g);
            }
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

router.put('/settings/memberApprove/off/:gid', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const group = await Group.findById(req.params.gid);
            if (req.session.passport.user === group.superAdmin.toString() || group.admins.includes(req.session.passport.user)) {
                const g = await Group.findByIdAndUpdate(req.params.gid, {
                    $set: {
                        memberApproveRequired: false
                    }
                },
                    {
                        new: true
                    });
                res.status(200).json(group);
            }
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

router.put('/addAdmin/:gid', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            //group for which the request came
            const gidGroup = await Group.findById(req.params.gid);
            if (gidGroup.superAdmin.toString() === req.session.passport.user) {
                //adding ids to the Admins
                const group = await Group.findByIdAndUpdate(req.params.id, {
                    $addToSet: {
                        admins: {
                            $each: req.body.admins
                        }
                    }
                });
                res.status(200).json(group);
            }
        }
        catch (err) {
            res.status(500);
            console.log(err);
        }
    }
    else {
        res.status(400);
    }
})


router.put('/addModerators/:gid', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            //group for which the request came
            const gidGroup = await Group.findById(req.params.gid);
            if (gidGroup.superAdmin.toString() === req.session.passport.user || gidGroup.admins.includes(req.session.passport.id)) {
                //adding ids to the Admins
                const group = await Group.findByIdAndUpdate(req.params.id, {
                    $addToSet: {
                        moderators: {
                            $each: req.body.admins
                        }
                    }
                });
                res.status(200).json(group);
            }
        }
        catch (err) {
            res.status(500);
            console.log(err);
        }
    }
    else {
        res.status(400);
    }
})

//viewing the member requests
router.get('/viewJoinRequests/:gid', async (req, res) => {
    console.log('request received');
    try {
        if (req.isAuthenticated()) {
            const group = await Group.findById(req.params.gid);
            console.log(group);
            if (group.superAdmin.toString() === req.session.passport.user) {
                const requests = group.memberRequests;
                //details of the users 
                const memberDetails = await User.find({
                    _id: {
                        $in: group.memberRequests
                    }
                }).select({ _id: 1, firstName: 1, lastName: 1 });
                console.log(memberDetails);
                res.status(200).json(memberDetails);
            }
            else {
                console.log('status 400');
                res.status(400);
            }
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


//adding member to the group
router.put('/addMember/:mid/:gid', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const group = await Group.findById(req.params.gid);
            if (req.session.passport.user === group.superAdmin.toString() || group.admins.includes(req.session.passport.user) || group.moderators.includes(req.session.passport.user)) {
                const group = await Group.findByIdAndUpdate(req.params.gid, {
                    $pull: {
                        memberRequests: req.params.mid
                    }
                });
                //adding member to members
                const groupAdd = await Group.findByIdAndUpdate(req.params.gid,
                    {
                        $addToSet: {
                            members: req.params.mid
                        },
                    },
                    {
                        new: true
                    }
                );
                res.status(200).json(groupAdd);
            }
            else {
                res.status(400);
            }
        }
        catch (err) {
            res.status(500);
            console.log(err);
        }
    }
    else {
        res.status(400);
    }
})

router.put('/declineJoinRequest/:gid/:mid', async (req, res) => {
    console.log('request recieved for declining a request');
    if (req.isAuthenticated()) {
        try {

            const group = await Group.findById(req.params.gid);
            if (req.session.passport.user === group.superAdmin.toString() || group.admins.includes(req.session.passport.user) || group.moderators.includes(req.session.passport.user)) {
                const data = await Group.findByIdAndUpdate(group._id, {
                    $pull: {
                        memberRequests: req.params.mid
                    }
                });
                res.status(200).json(data);
            }
            else {
                res.status(400);
            }
        }
        catch (err) {
            res.status(500);
            console.log(err);
        }
    }
    else {
        res.status(400);
    }
})


//viewing Pending posts 
router.get('/getPendingPosts/:gid', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const group = await Group.findById(req.params.gid);
            if (req.session.passport.user === group.superAdmin.toString() || group.admins.includes(req.session.passport.user) || group.moderators.includes(req.session.passport.user)) {
                const Posts = await Post.find({
                    _id: {
                        $in: group.pendingPosts
                    }
                });
                res.status(200).json(Posts);
            }
            else {
                res.status(400);
            }
        }
        catch (err) {
            res.status(500);
            console.log(err);
        }
    }
    else {
        res.status(400);
    }
})
//approving a pending post
router.put('/approvePost/:gid/:pid', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const group = await Group.findByIdAndUpdate(req.params.gid, {
                $pull: {
                    pendingPosts: req.params.pid
                },
                $push: {
                    approvedPosts: req.params.pid
                }
            },
                {
                    new: true
                });

            console.log(group);
            // const group2 = await Group.findByIdAndUpdate(req.params.gid, {
            //     $push: {
            //         approvedPosts : req.params.pid
            //     }

            // });
            res.status(200).json(group);
        }
        catch (err) {
            res.status(500);
        }
    }
    else {
        res.status(400);
    }
})

//not approving the post 
router.put('/deletePost/:gid/:pid', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const group = await Group.findByIdAndUpdate(req.params.gid, {
                $pull: {
                    pendingPosts: req.params.pid
                }
            },
                {
                    new: true
                });

            console.log(group);
            // const group2 = await Group.findByIdAndUpdate(req.params.gid, {
            //     $push: {
            //         approvedPosts : req.params.pid
            //     }

            // });
            res.status(200).json(group);
        }
        catch (err) {
            res.status(500);
        }
    }
    else {
        res.status(400);
    }
})

//getting group posts
router.get('/posts/:gid', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const posts = await Post.find({
                group: req.params.gid
            });
            console.log(posts);
            res.status(200).json(posts);
        }
        catch (err) {
            res.status(400);
        }
    }
    else {
        res.status(400);
    }
})

//showing friends for inviting to the group 
router.get('/friendsToInvite/:gid', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            const user = await User.findById(req.session.passport.user);
            const response = await Group.findById()
            const group = await Group.findById(req.params.gid);
            console.log(user);
            console.log(group.members);
            console.log('friends of the user ', user.friends);
            const friendsToDisplay = await User.find({
                $and: [
                    { _id: { $in: user.friends } },
                    {
                        _id: { $nin: group.members }
                    }]

            }).select({ _id: 1, firstName: 1, lastName: 1 });
            console.log('these are the friends');
            console.log(friendsToDisplay);
            res.status(200).json(friendsToDisplay);
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

//inviting a friend to the group
//fid is the id of the person being invited
router.put('/inviteFriend/:gid/:fid', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            //gertting the first Name and the last name of the one inviting
            const user = await User.findById(req.session.passport.user);
            const group = await Group.findById(req.params.gid);
            const invite = {
                groupId: req.params.gid,
                senderName: user.firstName + 
                " " + user.lastName,
                groupName : group.name
            }
            console.log(invite);
            //adding invite to the invites 
            const invitedUser = await User.findByIdAndUpdate(req.params.fid,
                {
                    $push: {
                        groupInvites: invite
                    }
                },{
                    new : true
                }
            );

            console.log(invitedUser);
            res.status(200).json('success');
        }
        catch (err) {
            res.status(500);
            console.log(err);
        }
    }
    else {
        res.status(400);
    }
})

module.exports = router;

