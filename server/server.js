const express = require('express');
const mongoose = require('mongoose');
const app = express()

const DB_URL =  'mongodb://localhost:27017'

mongoose.connect(DB_URL);

mongoose.connection.on('connected', function(){
    console.log('mongo connected success')
})

const User = mongoose.model('user', new mongoose.Schema({
    name:{type: String, require: true},
    age:{type: Number, require: true}
}))

// User.create({name:'测试3',age:17}, function(err,doc){
//     if(!err) {
//         console.log(doc);
//     }else {
//         console.log('失败');
//     }
// })

User.remove({age:17}, function(err, doc){
    console.log(doc);
    
})
app.get('/data', function(req,res){
    User.find({}, function(err, doc){
        return res.json(doc)
    })
})

app.listen(8080, function(){
    console.log('Node app start at prot 8080')
})