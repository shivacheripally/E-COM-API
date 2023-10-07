const productModel = require('./product_model');
class productController{
    getOneProduct = function(req, res){
        const id = req.params.id;
        console.log("product with id: ", id);
        const product = productModel.get(id);

        if(product){
            return res.status(200).send(product); 
        }
        return res.status(404).send("product not found!");
    }

    filterProducts = function(req, res){
        console.log(req.query);
        const { minPrice , maxPrice, category} = req.query;
        const result = productModel.filter(minPrice, maxPrice, category);

        return res.status(200).send(result);
    }

    addProduct = function(req, res){
        const {name, price, sizes} = req.body;
        console.log('addProduct',req.body);
        const newProduct = {
        name, price, sizes: sizes.split(','),
        imageUrl: req.file.filename
    }
    const createdRecord = productModel.add(newProduct);
    res.status(201).send(createdRecord);
}

deleteProducts = function(req, res){
    const id = req.params.body;

    console.log("id", id);

    const updated = productModel.delete(id);

    return res.status(201).send(updated);
}

rateProduct = function(req, res){

}

getAllProduct = function(req, res){
        const products = productModel.getAll();
        return res.status(200).send(products);
    }
}

module.exports = productController;