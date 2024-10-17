//req
const mongoose = require('mongoose');
//<>angular brackets ko hata ke password likhna hai aur / aur ? ke beech me database ka naam dena hai
const url = "mongodb+srv://anis5165:Vikas2002@cluster0.y3opu.mongodb.net/batch8?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)


    //thenc
    .then((result) => {
        console.log('connected to the database')

    }).catch((err) => {
        console.log(err)
    });

module.exports = mongoose;


