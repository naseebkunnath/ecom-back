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

  var orderItems = [];
  var orderTotal = 0;

  for(let item of req.body.items) {
    let productRecord = await Product.findOne({
      where: { id: item.id }
    });

    orderItems.push({
      product: productRecord.id,
      price: productRecord.price,
      quantity: item.quantity
    });
    orderTotal += productRecord.price * item.quantity;
  }

  var createdOrder = await Order.create({
    customer: req.authCustomer.id,
    totalAmount: orderTotal,
    status: 'pending'
  }).fetch();

  for(let item of orderItems) {
    await OrderItem.create({ ...item, order: createdOrder.id });
  }

  return res.ok();
};
