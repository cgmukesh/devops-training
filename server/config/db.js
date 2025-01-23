const mongoose = require('mongoose');
const url = process.env.MONGOB_DB_URL;

mongoose.connect(url)
    .then(()=>{
        console.log('MongoDB Connected...');
    }).catch((err)=>{
        console.log('Error while creating MongoDB connection ',err);
    })