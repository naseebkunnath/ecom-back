/**
 * ecommerce/order/create.js
 *
 * Create order.
 */
module.exports = async function create(req, res) {
    let customer = req.body;
    customer.password = await sails.helpers.passwords.hashPassword(customer.password);
  
    let createdCustomer = await Customer.create(_.pick(customer, [ 'name', 'email', 'phone', 'password' ])).fetch();
  
    sails.log.debug('TODO: implement');
    return res.ok();
};