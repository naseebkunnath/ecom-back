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

    if(!productRecord) {
      return res.badRequest();
    }

    orderItems.push({
      product: productRecord.id,
      title: productRecord.title,
      price: productRecord.price,
      quantity: item.quantity
    });
    orderTotal += productRecord.price * item.quantity;
  }

  var createdOrder = await Order.create({
    customer: req.authCustomer.id,
    totalAmount: orderTotal,
    shippingAddress: req.body.shippingAddress,
    paymentMethod: req.body.paymentMethod,
    status: 'pending'
  }).fetch();

  for(let item of orderItems) {
    await OrderItem.create({ ...item, order: createdOrder.id });
  }

  return res.json(_.pick(createdOrder, [ 'id' ]));
};
