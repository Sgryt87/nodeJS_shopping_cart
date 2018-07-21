var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true});
var products = [
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRwrHQdMbq8xTocTxjIYWcHFxlnIuaYA0fM4ecCaBFkSFtFNCAHw',
        title: 'Bike',
        description: 'Mountain Bike 1',
        price: 100
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCp4H_Svi8h4FeAgPhMdLJSWhrySqYVTPVP_r7_3J81FW64w5',
        title: 'Bike',
        description: 'Mountain Bike 2',
        price: 90
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrM6oaNo5fhsQR_2C5GvnveA-KX1_uYB0-Yc0bOyUDiusPTeBH',
        title: 'Bike',
        description: 'Mountain Bike 3',
        price: 50
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9WYuQnaa611agoPnFYP9rMNrU3TqHaeNORnzMQ7nae8BmeOv8RA',
        title: 'Bike',
        description: 'City Bike',
        price: 150
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2NCPaqqh003oqYmi6zGvUQF1EhxlszTzXP0NGknQMZXpRRa1tZg',
        title: 'Minibike',
        description: 'Blue Mini Bike',
        price: 100
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVK9uwck-FHygMmEBJjsoBLSgauDG6F8jTo8lAe3K1RBMGuovh',
        title: 'Beach Bike',
        description: 'Beach/City Bike',
        price: 100
    }),
];

var done = 0;
for (let i = 0; i < products.length; i++) {
    products[i].save((err, result) => {
        done++;
        if (done == products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}