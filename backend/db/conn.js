require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://sangeetha:${process.env.dbpass}@cluster0.slcjk.mongodb.net/intern?retryWrites=true&w=majority`,
    { useNewUrlParser: true })
    .then(console.log('Connected successfully'))
    .catch(err => {
        console.log(err);
    });



