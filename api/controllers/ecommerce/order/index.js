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
  let products = await Product.find();
  products = products.map(product => {
    return { ...product, imageUrl: `${req.protocol}://${req.get('host')}/${product.image}` }
  });
  return res.json(products);
};
