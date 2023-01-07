const express = require('express');
const os = require('os');
let smartcast = require('vizio-smart-cast');
var brtv = new smartcast('10.0.0.121', 'Zremx0rsp4');
var bltv = new smartcast('10.0.0.122', 'Znucrjn5wj');
var tltv = new smartcast('10.0.0.174', 'Zlm8wz56cx');
var trtv = new smartcast('10.0.0.166', 'Z14mi12lgg');
var tvs = {brtv, bltv, tltv, trtv};


const app = express();

app.use(express.static('dist'));

app.get('/api/tv/togglepower', (req, res) => {

    tvs[req.query.tv].control.power.toggle()
    .then(data => res.send(data))
    .catch(err => res.send(err));

    });

    app.get('/api/tv/togglemute', (req, res) => {

        tvs[req.query.tv].control.volume.toggleMute()
        .then(data => res.send(data))
        .catch(err => res.send(err));
    
        });

app.get('/api/tv/connected', (req, res) => {
    
    
    tvs[req.query.tv].settings.system.get()
    .then(data => res.send(data.STATUS))
    .catch(err => res.send(err));

});

app.get('/api/tv/setvolume', (req, res) => {

    //res.send(await bottomRightTV.power.currentMode());
    //console.log(req.query.tv);
    
    tvs[req.query.tv].control.volume.set(req.query.volume)
    .then(data => res.send(data))
    .catch(err => res.json(err));

    //console.log(`Set vol to ${req.query.volume}`);
    
    });

    app.get('/api/tv/OK', (req, res) => {

        tvs[req.query.tv].control.navigate.ok()
        .then(data => res.send(data))
        .catch(err => res.send(err));
    
        });

    app.get('/api/tv/navLeft', (req, res) => {

        tvs[req.query.tv].control.navigate.left()
        .then(data => res.send(data))
        .catch(err => res.send(err));
    
        });

    app.get('/api/tv/navRight', (req, res) => {

        tvs[req.query.tv].control.navigate.right()
        .then(data => res.send(data))
        .catch(err => res.send(err));
    
        });
    
    app.get('/api/tv/navUp', (req, res) => {

        tvs[req.query.tv].control.navigate.up()
        .then(data => res.send(data))
        .catch(err => res.send(err));
    
        });

    app.get('/api/tv/navDown', (req, res) => {

        tvs[req.query.tv].control.navigate.down()
        .then(data => res.send(data))
        .catch(err => res.send(err));
    
        });

    app.get('/api/tv/navBack', (req, res) => {

        tvs[req.query.tv].control.navigate.back()
        .then(data => res.send(data))
        .catch(err => res.send(err));
    
        });

    app.get('/api/tv/Input', (req, res) => {

        tvs[req.query.tv].control.input.cycle()
        .then(data => res.send(data))
        .catch(err => res.send(err));
    
        });

    app.get('/api/tv/pair', (req, res) => {

        tvs[req.query.tv].control.input.cycle()
        .then(data => res.send(data))
        .catch(err => res.send(err));
    
        });


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
