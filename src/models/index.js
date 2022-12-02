const User = require("./user.models");
const Product = require ('./product.models');
const Cart = require ('./cart.models');
const ProductInOrder = require('./productInOrder.models');
const ProductInCart = require('./productInCart.models');
const Order = require ('./order.models');


module.exports = {
  User, Product, Cart, ProductInCart, ProductInOrder, Order
 
};