const products= require('../Model/productModel')

//get all products from DB
exports.getAllProductsController = async (req,res)=>{
    try {
        const allProducts= await products.find()
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(401).json(error)
    }
}

// get product details by id

exports.getProductByIdController = async(req,res)=>{
    const {id}= req.params
    try {
        const product= await products.findOne({id})
        res.status(200).json(product)  
    } catch (error) {
       res.status(401).json(error) 
    }
}