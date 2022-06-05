const express = require('express');
const router = express.Router();
const User = require('./db/db');


router.get('/users', function (req, res) {
    User.find({}).then(function(result){
        res.send(JSON.stringify(result));

    }).catch(function(err){
        res.send(err);
    });
    
});

router.post('/users', async (req, res)=> {
    const user = new User(req.body);
    user.save().then((data) => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
    
});

router.get('/users/:id', function (req, res) {
    const id = req.params.id;
    User.findOne({name:id }).then(function(result){
        res.send(JSON.stringify(result));

    }).catch(function(err){
        res.send(err);
    });
    
});



router.put('/users/:id', function (req, res) {
    const id = req.params.id;
    const filter = { name: id };
    const update = req.body;
    User.updateOne(filter, update).then(function(result){
        res.send(JSON.stringify(result));

    }).catch(function(err){
        res.send(err);
    });
    
});

router.delete('/users/:id', function (req, res) {
    const id = req.params.id;
    User.deleteOne({_id:id}).then(function(result){
        res.send(JSON.stringify(result));
    }).catch(function(err){
        res.send(err);
    });
});

router.put('/:id', function (req, res) {
    const id = req.params.id;
    User.findOneAndUpdate({name:id}).then(function(result){
        res.send(JSON.stringify(result));
    }).catch(function(err){
        res.send(err);
    });
});

router.get('/users', function (req, res) {
    User.find({}).then(function(result){
        res.send(JSON.stringify(result));

    }).catch(function(err){
        res.send(err);
    });
});

module.exports = router;
