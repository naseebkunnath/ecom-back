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
  
  let orders = await Order.find({
    where: {
      customer: req.authCustomer.id
    },
  }).populate('items').populate('customer');

  return res.json(orders);
};
