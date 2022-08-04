require('dotenv').config();
const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../db/schemas');
const LocalStrategy = require('passport-local').Strategy;
const googleStrategy = require('passport-google-oauth2').Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const Company = require('../db/companySchema');
const Job = require('../db/jobSchema');
const Post = require('../db/Post');
const Comment = require('../db/Comment');
const path = require('path');
const UserEducation = require('../db/education');
const YoutubeStrategy = require("passport-youtube-v3").Strategy;
const makeRefCode = require('../utils/creatingRefCode');
const makeid = require('../utils/creatingRefCode');

require('https').globalAgent.options.rejectUnauthorized = false;

//const gapi = require('gapi');


const CLIENT_URL = "http://localhost:3000/";

passport.use(new LocalStrategy({
  usernameField: 'email'
}, User.authenticate()));

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  //console.log(user)
  done(null, user.id);
});

passport.deserializeUser(function (_id, done) {
  //console.log('Deserialising');
  User.findById(_id, function (err, user) {
    done(err, user);
  });
});


passport.use(
  new YoutubeStrategy(
    {
      callbackURL: "http://localhost:8080/youtube/auth/callback",
      scope: ["https://www.googleapis.com/auth/youtube.readonly"],
      clientID: process.env.client_id,
      clientSecret: process.env.secret,
      passReqToCallback: true

    },
    function (req, accessToken, refreshToken, profile, cb) {
      console.log('youtube channel');
      console.log(profile);
      User.findByIdAndUpdate(req.session.passport.user, { 'youtubeChannelId': profile.id, 'channelName': profile.displayName }, { new: true }, (err, user) => {
        cb(err, user);
      })
    }
  )
);


passport.use(new googleStrategy({
  clientID: process.env.client_id,
  clientSecret: process.env.secret,
  callbackURL: "http://localhost:8080/google/auth/callback",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
},
  async(accessToken, refreshToken, profile, cb)=>{
    console.log(profile);
    console.log(accessToken);

    const [firstName, lastName] = profile.displayName.split(" ");
    //console.log(firstName, lastName);
    User.findOrCreate({ googleId: profile.id, username: profile.sub, firstName: firstName, lastName: lastName, email: profile.email }, async(err, user) => {
      // console.log(req.session);
      const newRefCode = await makeid(7);
      console.log("newly created refer Code", newRefCode);
      console.log(user);
      console.log(user.referCode);
      if (user.referCode === null || user.referCode === undefined) {
        User.findByIdAndUpdate(user._id, {
          $set: {
            referCode: newRefCode
          }
        }, function (err, userWithRefCode) {
          if(err){
            console.log(err);
          }
          console.log(userWithRefCode);
        });
      }
      cb(err, user);
    });
  }
));

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      //console.log(profile);
      const [firstName, lastName] = profile.displayName.split(" ");
      User.findOrCreate({ githubId: profile.id, username: profile.id, firstName: firstName, lastName: lastName, email: profile.id }, function (err, user) {

        done(err, user);
      });
    }
  )
);



router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/auth/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect: CLIENT_URL
  }),
  (req, res) => {
    //console.log(req)
  }

)

router.get('/auth/youtube', passport.authenticate('youtube'));

router.get('/youtube/auth/callback', passport.authenticate('youtube', {
  session: false,
  failureRedirect: '/login',
  successRedirect: CLIENT_URL
}),
  (req, res) => {
    //console.log(req)
  }
)

router.get('/auth/github/',
  passport.authenticate('github', { scope: ["profile"] })
)

router.get('/auth/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/login',
    successRedirect: CLIENT_URL
  }),
  (req, res) => res.json('Logged In')
)


router.get('/company/contentadmin/:uid', async (req, res) => {
  const data = await Company.findOne({ 'ContentAdmin': req.params.uid });
  console.log(data);
  res.json(data);
})



router.patch('/company/:id/addContent', async (req, res) => {
  //console.log('request params' + req.params.id);
  try {
    //console.log(req.body);
    const data = await Company.findByIdAndUpdate(req.params.id,
      {
        $push: {
          'ContentAdmin': req.body.id
        }
      },
      {
        new: true
      });
    if (data) {
      res.json('success');
    }

  }
  catch (err) {
    console.log(err);
    res.json(err);
  }
})



router.get('/uploads/:fileName', async (req, res) => {
  //res.sendFile()
  const pathN = path.join(__dirname, '..', 'uploads', req.params.fileName);
  console.log(pathN);
  res.sendFile(pathN);
})




router.get('/job/getJobs/:id', async (req, res) => {
  try {
    const data = await Job.find({ userId: req.params.id });
    console.log(data);
    res.json(data);
  }
  catch (err) {
    console.log(err);
  }
})

router.get('/job/:id/gethradmins', async (req, res) => {
  try {
    console.log('recived request at here');
    const job = await Job.findById(req.params.id);
    const company = await Company.findOne({ name: job.companyName });
    //const hrAdmin = company.rAdmin
    // let hrAdmin = company.HrAdmin.map(elem =>{
    //   return elem.toString();
    // })
    const users = await User.find({
      '_id': {
        $in: company.HrAdmin
      }
    })
    //res.json(hrAdmin);
    console.log(users);
    res.json(users);
  }
  catch (err) {
    console.log('err');
  }
})

router.put('/job/:id/addHrAdmin', async (req, res) => {
  try {
    console.log(req.body);
    console.log('request received here');
    const data = await Job.findByIdAndUpdate(req.params.id,
      {
        $push: {
          'hrAdmin': req.body.id
        }
      },
      {
        new: true
      });
    if (data) {
      res.json('success');
    }
  }
  catch (err) {
    res.status(400);
  }

})

/*postts*/




router.post('/comment/addComment/:id', async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(200).json({ success: false, message: "Post isn't available" });
      }
      const data = await Comment.create({ userId: req.session.passport.user, postId: req.params.id, comment: req.body.comment })
      return res.status(200).json({ success: true, message: "Comment Successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error: error, message: "Internal Server Error" })
    }
  }
  else {
    res.status(400);
  }
}
)

router.get('/comment/getComments/:id', async (req, res) => {
  try {
    const data = await Comment.find({ postId: req.params.id });
    //console.log(comment);
    return res.status(200).json(data)
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
})

router.put('/comment/addReply/:id', async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const comment = await Comment.findById(req.params.id);
      if (!comment) {
        return res.status(200).json({ success: false, message: "Post isn't available" });
      }
      const data = await Comment.findByIdAndUpdate(req.params.id, {
        $push: { commentReply: { userId: req.session.passport.user, comment: req.body.comment } }
      })
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error: error, message: "Internal Server Error" })
    }
  }
  else {
    res.status(400);
  }

})



router.post('/education/addUserEducation', async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      console.log(req.body);
      for (let i = 0; i < req.body.length; i++) {
        const education = await UserEducation.create({ ...req.body[i], userId: req.session.passport.user });
        console.log(education);
      }

      //res.status(200).json(education);
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

router.get('/getUserEducation/:id', async (req, res) => {
  try {
    const data = await UserEducation.find({ userId: req.params.id }).sort({ date: 1 });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
)

module.exports = router;