const wishlists= require('../Model/wishlistModel');

exports.addToWishlist = async(req,res)=>{
    const {id,title,price,description,category,image,rating}= req.body;
    const userId= req.payload
    console.log("==userid==");
    console.log(userId);
    const existingProduct = await wishlists.findOne({id, userId});
        if(existingProduct){
            res.status(406).json("Product already in your wishlist")
        }
        else{
            const newProduct= new wishlists({
                userId,
                id,
                title,
                price,
                description,
                category,
                image,
                rating
            })
            await newProduct.save();
            res.status(200).json("product added successfully")
        }
    
}

exports.getFromWishlist = async (req,res)=>{
    const userId = req.payload;
    try {
        const allProducts = await wishlists.find({userId})
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(401).json("error in fetching wishlist")
    }
}