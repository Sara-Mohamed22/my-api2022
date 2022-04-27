
const express= require('express');
const product = require('../models/product');

const router = express.Router(); //تستخدم عشان اعمل endPoint or route بعيد عن فايل السيرفر للنظام مش اكتر 

const Products = require('../models/product');


/*
router.get('/product' , (req , res)=>{

    res.status(200).json({     
        'name' : 'orange' , 
        'price' : 250 , 
        'color' : 'orange'
    });
});


router.post('/product' , (req , res)=>{


    const name = req.body.name ;
    const price = req.body.price ;
    const color = req.body.color ;

    console.log('name ' + name) ;
    console.log('price ' + price);
    console.log('color ' + color);
    console.log(req.body)

    /*console.log(req.fields);

    console.log('name ' + req.fields.name) ;
    console.log('price ' + req.fields.price);
    console.log('color ' + req.fields.color);*/

  /* if(req.body == {})

   {
   
    res.status(200).json({
        "message" : 'add product successfully ' ,

        "data" : {"name" : req.fields.name ,"price" : req.fields.price ,"color": req.fields.color} ,

        "status" :200
  }) 
     }*/

   /* else{
    res.status(200).json({
          "message" : 'add product successfully ' ,

          "data" : {"name" : name ,"price" : price ,"color": color} ,

          "status" :200
    })
      }
});*/



    router.get('/users' , (req , res)=>{
        res.status(200).json({    
            'name' : 'ali' , 
            'age' : 25 , 
        });
    }
);

//////////////////////use mongooose

router.get('/product' , (req , res)=>{
    Products.find().then((data)=>{
        res.json(data);
    });
  

});


///get product by ID

router.get("/product/:id" , async (req , res)=>{
  try
  {
      console.log('params ' + req.params.id);

    const product = await  Products.findById(req.params.id);
    res.json(product);

  }
  catch(e){
           console.log(e);
  }
});


///////delete byId

router.delete('/product/:id' ,  (req,res)=>{


    /*try{
        const product = await Products.deleteOne( {"_id": req.params.id}) ;
        res.json({
            "msg" : 'Delete Successfully ' ,
        })
    }
    catch(e)
    {
       console.log(e);
    }*/

    Products.deleteOne( {"_id": req.params.id}).then(()=>{
        res.json({
            "msg" : 'Delete Successfully ' ,
        })

    }).catch((e)=>{
        console.log(e);
    })
  
})


/////////////////edit on data patch => edit specific ||| put => override all

router.patch('/product/:id' ,  (req,res)=>{

    Products.updateOne( {"_id": req.params.id} , {"price" : req.body._id} ).then(()=>{
        res.json({
            "msg" : 'update Successfully ' ,
        })

    }).catch((e)=>{
        console.log(e);
    })
  
})


router.post('/product' , (req , res)=>{
   const product = new Products({
    title : req.body.name ,
    price:  req.body.price ,
    color : req.body.color ,
   });

   product.save().then((data)=>{

    res.json({
        "status" : 200 ,
        "message" : " Add product Successfully " ,
        "data" : data 
    })

   }).catch((e)=>{
    console.log(e);
   });; //to save data in mongodb 


});

module.exports = router ;