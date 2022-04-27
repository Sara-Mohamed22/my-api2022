const mongoose = require('mongoose');


//to define model

const productModel = mongoose.Schema({
    ///if write condition
    // title: {
    //     type : String ,
    //     required : true
    // }

title : String ,
price:  Number ,
color : String ,

});  //schema هتعمل الcollection


// module.exports = mongoose.model('collection name ' , 'model name');

module.exports = mongoose.model('products' , productModel );
