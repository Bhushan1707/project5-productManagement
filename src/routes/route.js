const express = require('express')
const router = express.Router()
const userController = require("../controller/userController")
const productController = require("../controller/productController")
const cartController=require("../controller/cartController")
const middleware=require("../Middleware/commonMid")



//=====================[ USER API'S ]=========================
router.post('/register', userController.createUser)
router.post('/login', userController.loginUser)
router.get('/user/:userId/profile',middleware.authenticate,middleware.authForParams, userController.getUserdata)
router.put('/user/:userId/profile',middleware.authenticate,middleware.authForParams,userController.updateUser)

//===================[ PRODUCT API'S]=========================
router.post('/products',productController.createProduct) //rites
router.get('/products',productController.getProduct) //jiya lal
router.get('/products/:productId',productController.getProductById)// jiya lal
router.put('/products/:productId',productController.updateProduct) // bhushan
router.delete('/products/:productId',productController.deleteProduct) // himashu

//====================[CART API'S]============================

router.post('/users/:userId/cart',middleware.authenticate,middleware.authForParams,cartController.createCart) //bhushan
router.put('/users/:userId/cart',middleware.authenticate,middleware.authForParams,cartController.updateCart)  // jiyalal
// router.get('/users/:userId/cart',cartController.getCart)  // himanshu
router.delete('/users/:userId/cart',cartController.deleteCart) //ritesh 

//====================[ORDER API'S]=============================

router.post('/users/:userId/orders')  //Bhushan
//router.put('/users/:userId/orders',orderController.updateOrder)  //Ritesh

module.exports = router