const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const router = require('./routes/router');
const admin = require('./routes/admin');
const user = require('./routes/user');
const company = require('./routes/company');
const job = require('./routes/job');
const group = require('./routes/group');
const post = require('./routes/post');
const session = require('express-session');
const passport = require('passport');
const messageRoutes = require("./routes/messageRoutes");

const cors = require('cors');

const chat = require('./routes/chat');

require('./db/Chat');

require('./db/messageModel');

app.use('/chat', chat);



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: "A ver LONG STRING",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1 * 24 * 60 * 60 * 1000,
    }
}));

app.use(passport.initialize());
app.use(passport.session());
require('./db/conn');
require('./db/schemas');


app.use(router);
app.use('/admin', admin);
app.use('/user', user);
app.use('/company', company);
app.use('/job', job);
app.use('/group', group);
app.use('/post', post);
app.use("/message", messageRoutes);


app.listen(port, () => {
    console.log("server listening at port 8080");
})




//chats
// const io = require("socket.io")(server, {
//     pingTimeout: 60000,
//     cors: {
//         origin: "http://localhost:3000",
//         // credentials: true,
//     },
// });

// io.on("connection", (socket) => {
//     console.log("Connected to socket.io");
//     socket.on("setup", (userData) => {
//         socket.join(userData._id);
//         socket.emit("connected");
//     });

//     socket.on("join chat", (room) => {
//         socket.join(room);
//         console.log("User Joined Room: " + room);
//     });
//     socket.on("typing", (room) => socket.in(room).emit("typing"));
//     socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

//     socket.on("new message", (newMessageRecieved) => {
//         var chat = newMessageRecieved.chat;

//         if (!chat.users) return console.log("chat.users not defined");

//         chat.users.forEach((user) => {
//             if (user._id == newMessageRecieved.sender._id) return;

//             socket.in(user._id).emit("message recieved", newMessageRecieved);
//         });
//     });

//     socket.off("setup", () => {
//         console.log("USER DISCONNECTED");
//         socket.leave(userData._id);
//     });
// });
