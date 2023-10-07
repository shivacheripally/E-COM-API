class productModel{
    constructor(id, name, price, imageUrl, desc, category, sizes){
        this.id = id;
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.desc = desc;
        this.category = category;
        this.sizes = sizes;
    }

    static getAll(){
        return products;
    }

    static add(product){
        product.id = products.length+1;
        products.push(product);

        return product;
    }

    static get(id){
        if(id < products.length) return products[id];
        else return "";
    }

    static delete(id){
        products.filter((id)=>{
            id !== products.id
        })

        return products;
    }

    static filter(minPrice, maxPrice, category){
        console.log('items: ',minPrice, maxPrice, category);
        const result = products.filter((product)=> (!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice) && (!category || product.category == category));
        console.log("product model", result);
        return result;
    }
} 

const products = [
    new productModel(
        1,
        "item1",
        100,
        "imagelink1",
        "description1",
        "category1",
        ["S", "L", "M"]
    ),
    new productModel(
        2,
        "item2",
        200,
        "imagelink2",
        "description2",
        "category2",
        ["S", "L", "M"]
    ),
    new productModel(
        3,
        "item2",
        300,
        "imagelink3",
        "description3",
        "category3",
        ["S", "L", "M"]
    )
]

module.exports = productModel;