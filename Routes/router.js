const express = require('express');

const productController = require('../Controller/productController');
const userController = require('../Controller/userController')
const wishlistController = require('../Controller/wishlistController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const cartController = require('../Controller/cartController')

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

//remove item from wishlist
router.delete('/wishlist/remove/:id', jwtMiddleware,wishlistController.removeWishlist)

//add item to cart
router.post('/add-cart',jwtMiddleware, cartController.addToCartController)

// get item from carts
router.get('/cart/all-product',jwtMiddleware, cartController.getItemFromCart)

//remove item from cart
router.delete('/cart/remove/:id', jwtMiddleware,cartController.removeItemFromCart)

//increment qunatity
router.get('/cart/increment/:id', jwtMiddleware,cartController.incrementItems)

//decrement quantity
router.get('/cart/decrement/:id',jwtMiddleware,cartController.decrementItems)

//empty cart
router.delete('/empty-cart',jwtMiddleware,cartController.emptyCartItems)

module.exports = router