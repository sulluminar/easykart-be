const express = require('express');

const productController = require('../Controller/productController');
const userController = require('../Controller/userController')
const wishlistController = require('../Controller/wishlistController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')

const router = new express.Router()

// get all products
router.get('/all-products',productController.getAllProductsController)

//register
router.post('/register',userController.registerUser)

//login
router.post('/login',userController.loginUser)

//get product details by id
router.get('/get-product/:id',productController.getProductByIdController)

// add item to wishlist
router.post('/add-wishlist',jwtMiddleware,wishlistController.addToWishlist)

//get wishlist items
router.get('/wishlist/allproduct', jwtMiddleware,wishlistController.getFromWishlist)

module.exports = router