const carts = require('../Model/cartModel');

exports.addToCartController = async(req,res)=>{
    const userId= req.payload;
    const {id,title,price,description,category,image,rating,quantity}= req.body;
    try {
        const existingProduct = await carts.findOne({id,userId})
        if(existingProduct){
            existingProduct.quantity = existingProduct.quantity+1;
            existingProduct.grandTotal = existingProduct.quantity*existingProduct.price;
            await existingProduct.save();
            res.status(200).json("Item incremented")
        }
        else{
            const newProduct = new carts({
                id,
                title,
                price,
                description,
                category,
                image,
                quantity,
                grandTotal:price,
                userId
            })
            await newProduct.save();
            res.status(200).json("item added to cart")
        }
        
    } catch (error) {
        res.status(406).json("error in addding product to cart")
    }
}