/**
 * Module dependencies
 */

// ...


/**
 * ecommerce/product/index.js
 *
 * Get all orders.
 */
module.exports = async function index(req, res) {
  const products = await Product.find();
  return res.json(products);
};
