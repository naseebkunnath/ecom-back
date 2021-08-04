/**
 * Module dependencies
 */

// ...


/**
 * ecommerce/order/create.js
 *
 * Create order.
 */
module.exports = async function create(req, res) {

  console.log(req.body);

  var createdOrder = await Order.create({
    totalAmount: 200,
    status: 'pending'
  }).fetch();

  for(let item of req.body.items) {
    await OrderItem.create({
      quantity: item.quantity,
      price: 100,
      order: createdOrder.id,
      product: item.id,
    });
  }

  sails.log.debug('TODO: implement');
  return res.ok();

};
