const express = require('express');
const app = express();
const pug = require('pug');
const workingTime = require('./middleware/workingTime')

app.set('view engine', pug);
app.set('views','./views');

const port = process.env.PORT || 5000;

app.use(workingTime);
app.use(express.static('public'))

app.get('/', workingTime ,(req,res)=>{
    res.render('home.pug')
})

app.get('/home', workingTime ,(req,res)=>{
    res.render('home.pug')
})

app.get('/services', workingTime ,(req,res)=>{
    res.render('services.pug')
})

app.get('/contact', workingTime ,(req,res)=>{
    res.render('contact.pug')
})





    



app.listen(port, (err) => {
    if(err){
        throw err
    }
    else{
        console.log(`SERVER LISTENING AND RUNNING ON PORT : ${port}`)
    }
})