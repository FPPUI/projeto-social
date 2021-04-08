const express = require('express')

const router = require('./routes')

const app = express()

app.use(router)

app.listen(4444, () => {
    const color = require('colors-cli/toxic');
    const loading =  require('loading-cli');
    const load = loading("starting server!!".yellow)
    load.color = 'yellow'
    load.start()
 
    setTimeout(function(){
        load.color = 'blue';
        load.text = ' Loading'.blue;
    },1000)

})