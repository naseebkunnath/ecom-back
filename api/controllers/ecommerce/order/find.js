/**
 * Module dependencies
 */

// ...


/**
 * ecommerce/product/index.js
 *
 * Get a particular order.
 */
module.exports = async function index(req, res) {

    let order = await Order.findOne({
        where: {
            id: req.param('id'),
            customer: req.authCustomer.id
        },
    }).populate('items').populate('customer');

    return res.json(order);
};
