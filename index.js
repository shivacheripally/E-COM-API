const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const productsRoute = require('./src/features/product/product_routes');
const usersRoute = require('./src/features/user/user_route');
const port = 8000;

app.use(express.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use("/api/products", productsRoute);
app.use('/api/users', usersRoute);

app.get('/', function(req, res){
    return res.send('<h1>Hello World!</h1>');
})

app.listen(port, function(err){
    if(err){
        console.log(`Error while server is up! ${err}`);
        return ;
    }
    console.log(`Server is up and running on port: ${port}`);
})