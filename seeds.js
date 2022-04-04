const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farm')
.then(()=>
{
    console.log("mongo connection open");
}).catch((err)   =>
    {
            console.log("connection lost");
            console.log(err);
    })


// const p = new Product({
//     name : 'dragon fruit',
//     price: 1.99,
//     category : 'fruit'
// })

// p.save().then(p=>
//     {
//         console.log(p);
//     })
//     .catch(e =>
//         {
//             console.log(e);
//         })

const seedProducts = [
    {
        name : 'apple',
        price : 6.9,
        category : 'fruit'
    },
    {
        name : 'orange',
        price : 4.9,
        category : 'fruit'
    },
    {
        name : 'brinjal',
        price : 1.9,
        category : 'vegetables'
    },
    {
        name : 'paneer',
        price : 16.9,
        category : 'dairy'
    },
    {
        name : 'milk',
        price : 15.9,
        category : 'dairy'
    },
    {
        name : 'beans',
        price : 10.5,
        category : 'vegetables'
    },

]
function insert(data){
Product.insertMany(data)
.then(res=>
    {
        console.log(res)
    })
.catch(e =>
    {
        console.log(e)
    })
}

