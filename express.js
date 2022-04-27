
//this file belong to server only

const express = require('express');
///express => is set of libraries use to create server and other function

//انا عاوزة استخد ميثود ال express من مكتبة الexpress لانها فيها كل حاجه خاصة بالسيرفر


const myRoute = require('./routes/route');
const app = express();

const bodyParser = require('body-parser') ;
const mongoose = require('mongoose');
const formData = require('express-formidable'); 

var cors = require('cors') //use to any one access my account


/*
//////////////middleWare => حاجه بتشتغل مع كل request ببعته للسيرفر
//use to put permission on user
///to define middleWare => app.use()

app.use('/products',(req , res, next)=>{
    console.log('middleWare called');
    next(); //نفذ اللي بعده عشان مش يقعد يشتغل على لوووب
}); //define middleWare

*/


/*
هفصل ال route فى فايل تانى
app.get('/products' , (req , res)=>{

    //res.write => in nodeJs
    //res.send => use in express to send html
    //res.sendFile => to send html page 
    //res.json => use to create api to use front and mobile
     
    // res.send('hello from home');

    res.status(200).json({    ////send status code before send response 
        'name' : 'apple' , 
        'price' : 250 , 
        'color' : 'red'
    });
});


    app.get('/users' , (req , res)=>{
        res.status(200).json({    
            'name' : 'ali' , 
            'age' : 25 , 
        });
    }
);*/



//  app.use(formData());

/////BodyParser MiddleWare

app.use(bodyParser.json());// convert any request body to json

////route Middleware

 app.use('/products' , myRoute ); //بقوله اما تشوف /products روح علي الفايل myRoute وهات المطلوب علي حسب الريكوست المبعوت فى بوست مان

 ////cors middleWare
 app.use(cors());

mongoose.connect('mongodb+srv://sara:Rn9uaiSa7mIyNWBM@cluster0.z4iru.mongodb.net/myDb?retryWrites=true&w=majority',
()=>{
    console.log('connected to mongoo successfully ')
    // app.listen(8080, ()=>{
        app.listen( process.env.Port || 3000 , ()=>{
        console.log('listen to server 8080 ...');
    })
});


///port number = process.env.port => server give app port number automatic

