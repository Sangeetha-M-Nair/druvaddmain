const express = require('express');
const router = express.Router();
const Post = require('../db/Post');
const multer = require('multer');
const Group = require('../db/schemas/group');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (req.isAuthenticated()) {
            cb(null, 'uploads/');
        }
        else {
            console.log('Not authenticated');
        }

    },
    filename: function (req, file, cb) {
        if (req.isAuthenticated) {
            cb(null, Date.now() + '_' + file.originalname);
        }
        else {
            console.log('Not authenticated');
        }
    },
});

const fileFilter = (req, file, cb) => {
    console.log('in file filter');
    // reject a file
    if (
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/png'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage,
    fileFilter,
});

const port = 8080;

router.post('/addPost/user', upload.single('postImg'),
    async (req, res) => {
        try {
            console.log(req.body);
            console.log(req.body.Description);
            const post = {
                userId: req.session.passport.user,
                ImgPath: req.file
                    ? `http://localhost:${port}/uploads/${req.file.filename}`
                    : null,
                Description: req.body.Description,
                name: req.body.name
            }
            console.log(post);
            await Post.create(post);
            return res.status(200).json({ success: true, message: "Posted SuccessFully" })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ success: false, error: error, message: "Internal Server Error" })
        }
    }
)

router.post('/addPost/company', upload.single('postImg'),
    async (req, res) => {
        try {
            console.log(req.body);
            console.log(req.body.Description);
            const post = {
                userId: req.session.passport.user,
                ImgPath: req.file
                    ? `http://localhost:${port}/uploads/${req.file.filename}`
                    : null,
                Description: req.body.Description,
                name: req.body.name,
                companyName: req.body.companyName
            }
            console.log(post);
            await Post.create(post);
            return res.status(200).json({ success: true, message: "Posted SuccessFully" })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ success: false, error: error, message: "Internal Server Error" })
        }
    }
)


router.get('/getPost/:id', async(req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch(err){
        res.status(500);
        console.log(err);
    }
})

router.post('/addPost/group/:gid', upload.single('postImg'),
    async (req, res) => {
        try {
            const group = await Group.findById(req.params.gid);
            console.log(req.body);
            console.log(req.body.Description);
            const post = {
                userId: req.session.passport.user,
                ImgPath: req.file
                    ? `http://localhost:${port}/uploads/${req.file.filename}`
                    : null,
                Description: req.body.Description,
                name: req.body.name,
                group : req.params.gid
            }
            console.log(post);
            //returned document
            const postRet = await Post.create(post);
            console.log(group.postApprovalRequired);
            if(group.postApproveRequired){
                const groupUpdate = await Group.findByIdAndUpdate(req.params.gid, {
                    $push : {
                        pendingPosts : postRet._id
                    }
                });
            }
            else{
                const groupUpdate = await Group.findByIdAndUpdate(req.params.gid, {
                    $push : {
                        approvedPosts : postRet._id
                    }
                });

            }
            return res.status(200).json({ success: true, message: "Posted SuccessFully" })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ success: false, error: error, message: "Internal Server Error" })
        }
    }
)


router.get('/allposts', async (req, res) => {
    try {
        console.log('request recieved at get all posts');
        // const user = await User.findById(req.user.id);
        // const posts = await Post.find({ $or: [{ userId: { $in: user.following } }, { userId: req.user.id }] }).sort({ date: -1, _id: -1 });
        const posts = await Post.find().sort({ date: -1, _id: -1, Likes: -1 });
        console.log(posts);
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
})


router.put('/like/:id', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            let postToLike = await Post.findById(req.params.id);
            let post = await Post.findByIdAndUpdate(req.params.id, {
                $addToSet: { Likes: req.session.passport.user },
                },
                {new : true}
            )
            if(postToLike.Likes.length === post.Likes.length){
                res.status(200).json(null);
            }
            else res.status(200).json('liked');
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    }
    else {
        res.status(400);
    }
})

router.put('/dislike/:id', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            let postToDislike = await Post.findById(req.params.id);
            let post = await Post.findByIdAndUpdate(req.params.id, {
                $addToSet: { Dislikes: req.session.passport.user }
            },
            {new : true});
            if(postToDislike.Dislikes.length === post.Dislikes.length){
                res.status(200).json(null);
            }
            
            return res.status(200).json("disLike");
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    }
    else {
        res.status(400);
    }
})


// To Likes
router.put('/removeLikes/:id', async (req, res) => {
    if (req.isAuthenticated()) {
        try {
            let post = await Post.findByIdAndUpdate(req.params.id, {
                $pull: { Likes: req.session.passport.user }
            })
            // post.countLikes--;
            // await Post.findByIdAndUpdate(req.params.id, { $set: post });
            return res.status(200).json({ success: true, message: "remLike" })
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    }
    res.status(400);
})

// To DisLike
router.put('/removeDislikes/:id', async (req, res) => {
    try {
        let post = await Post.findByIdAndUpdate(req.params.id, {
            $pull: { Dislikes: req.session.passport.user }
        })
        return res.status(200).json({ success: true, message: "remDislike" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
})

//get likes 
router.get('/postsForLogOut/', async(req, res)=>{
    try{
        const posts = await Post.find({'Likes.0': {$exists: true}});
        console.log(posts);
        res.status(200).json(posts);
    }
    catch(err){
        console.log(err);
        res.status(500);
    }
})





module.exports = router;